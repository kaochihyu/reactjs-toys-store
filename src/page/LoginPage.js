import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { H2 } from '../components/Text';
import { ArrowButton, ActionButton } from '../components/Button';
import { Form, FormItem, Note } from '../components/Form';

const Logo = styled(Link)`
  color: #fff;
  font-family: 'Patua One', cursive;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.sm} {
    display: block;
  } 
`;

const BackButton = styled(ArrowButton)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  color: #000;
`;


function LoginPage() {
  let history = useHistory()
  const goToPreviousPath = () => {
    history.goBack()
  }

  return (
    <PageContainer>
      <BackButton bgColor={'white'} direction={'left'} color={'#000'} handleClick={goToPreviousPath} />
      <Form>
        <Logo as={Link} to={"/"}>TOYS</Logo>
        <H2>Member Login</H2>
        <FormItem>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"></input>
        </FormItem>
        <FormItem>
          <label htmlFor="password">Password</label>
          <input type="text" id="password"></input>
        </FormItem>
        <ActionButton color={"secondary"} content={"Log in"} />
        <Note>Don't have account ? <Link to={"/signup"}>Sign Up</Link ></Note>
      </Form>
    </PageContainer>

  );
}

export default LoginPage;
