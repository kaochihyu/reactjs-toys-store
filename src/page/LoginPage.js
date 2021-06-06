import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { H2 } from '../components/Text';
import { ArrowButton, ActionButton } from '../components/Button';
import { Form, FormItem, FormInput, Note } from '../components/Form';
import { login } from '../redux/reducer/userSlice';

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
`;


function LoginPage() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const dispatch = useDispatch();
  const errorMessage = useSelector((store) => store.user.errorMessage);

  const handleSubmit = (e) => {
    setWarning('')
    e.preventDefault()
    if (!username || !password) {
      setWarning('Something missed')
      return
    }
    dispatch(login(username, password)).then((res) => {
      if (res) {
        history.push('/')
      }
    })
  }

  const goToPreviousPath = () => {
    history.goBack()
  }

  console.log(username, password)
  return (
    <PageContainer>
      <BackButton bgColor={'white'} direction={'left'} color={'#000'} handleClick={goToPreviousPath} />
      <Form onSubmit={handleSubmit}>
        <Logo as={Link} to={"/"}>TOYS</Logo>
        <H2>Member Login</H2>
        <FormItem>
          <label htmlFor="username">Username</label>
          <FormInput type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        </FormItem>
        <FormItem>
          <label htmlFor="password">Password</label>
          <FormInput type="text" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </FormItem>
        {warning && (<Note>{warning}</Note>)}
        {errorMessage && (<Note>{errorMessage}</Note>)}
        <ActionButton color={"secondary"} content={"Log in"} />
        <Note>Don't have account ? <Link to={"/signup"}>Sign Up</Link ></Note>

      </Form>
    </PageContainer>

  );
}

export default LoginPage;
