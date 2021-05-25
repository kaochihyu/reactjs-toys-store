import React, { useState } from 'react';
import styled from 'styled-components';
import hero_1 from '../image/hero_1.jpg';
import hero_2 from '../image/hero_2.jpg';
import hero_3 from '../image/hero_3.png';
import hero_4 from '../image/hero_4.png';
import about_1 from '../image/about_1.jpg';
import about_2 from '../image/about_2.jpg';
import { H1, H3, P } from '../components/Text'
import { GoButton, ArrowButton } from '../components/Button';
import { Footer } from '../components/Footer';


const Home = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 56% 44%;
  grid-template-rows: 100%;
  grid-template-areas: "hero_image hero_description";

  ${({ theme }) => theme.media.md} {
    height: initial;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
`;

const HeroImage = styled.div`
  position: relative;
  grid-area: hero_image;
  overflow-x: hidden;
  ${({ theme }) => theme.media.md} {
    overflow-x: initial;
    height: 25rem;
  }
`;

const HeroImageContainer = styled.div`
  width: auto;
  height: 100%;
  white-space: nowrap; 
  transform: translateX(-${props => props.slidePage}%);
  transition: 0.5s ease-in-out;

  > img {
    width: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

const SliderButtons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const HeroContent = styled.div`
  padding: 9.375rem 6.25rem 0 6.25rem;
  grid-area: hero_description;

  > ${P} {
    color: ${({ theme }) => theme.colors.lightGray};
    text-align: justify;
    line-height: 1.4em;
  }

  > * ~ * {
    margin-top: ${({ theme }) => theme.space.md};
  }

  ${({ theme }) => theme.media.lg} {
    padding: 9.375rem 2.5rem 0 2.5rem;
  }

  ${({ theme }) => theme.media.md} {
    padding: 5rem 2.5rem 5rem 2.5rem;
  }
`;

const About = styled.div`
  width: 100%;
  height: 50%;
  ${({ theme }) => theme.media.md} {
    height: initial;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${({ theme }) => theme.media.md} {
    display: block;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: auto;
  flex: 2;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  ${({ theme }) => theme.media.md} {
    flex: 1;
    height: 21rem;
  }
`;

const AboutDescription = styled.div`
  flex: 3;
  padding: ${({ theme }) => theme.space.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  > * ~ * {
    margin-top: ${({ theme }) => theme.space.sm};
    color: ${({ theme }) => theme.colors.lightGray};
  }

  ${({ theme }) => theme.media.md} {
    flex: 1;
    padding: ${({ theme }) => theme.space.md};
    height: 21rem;
  }
`;

function HomePage() {
  const [slidePage, setSlidePage] = useState(0)

  const handlePageMinus = () => {
    setSlidePage(slidePage - 1)
    if (slidePage < 1) {
      setSlidePage(3)
    }
  }

  const handlePagePlus = () => {
    setSlidePage(slidePage + 1)
    if (slidePage > 2) {
      setSlidePage(0)
    }
  }


  return (
    <Home>
      <HeroContainer>
        <HeroImage>
          <HeroImageContainer slidePage={slidePage * 100}>
            <img src={hero_1} alt="hero_1"></img>
            <img src={hero_2} alt="hero_2"></img>
            <img src={hero_3} alt="hero_3"></img>
            <img src={hero_4} alt="hero_4"></img>
          </HeroImageContainer>

          <SliderButtons>
            <ArrowButton color={"#fff"} direction={"left"} handleClick={handlePageMinus} />
            <ArrowButton color={"#fff"} direction={"right"} handleClick={handlePagePlus} />
          </SliderButtons>
        </HeroImage>
        <HeroContent>
          <H1>Discover innovative way to play</H1>
          <P>This is a website for you to choose your lovely toys. It’s not only funny but also healthy and safe. Pick it up for fun.</P>
          <GoButton content={"SHOP NOW"} route={"shop"} />
        </HeroContent>
      </HeroContainer>

      <About>
        <AboutContainer>
          <AboutImage>
            <img src={about_1} alt="about_1"></img>
          </AboutImage>
          <AboutDescription>
            <H3>ABOUT OUT STORE</H3>
            <H3>This is a website for you to choose your lovely toys. It’s not only funny but also healthy and safe.
Pick it up for fun.</H3>
          </AboutDescription>
          <AboutImage>
            <img src={about_2} alt="about_2"></img>
          </AboutImage>
        </AboutContainer>
      </About>
      <Footer />
    </Home>
  );
}

export default HomePage;
