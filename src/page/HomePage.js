import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import hero from '../image/hero.jpg';
import about_1 from '../image/about_1.jpg';
import { H1, P } from '../components/Text'
import { GoButton, ArrowButton } from '../components/Button';

const Hero = styled.div`
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
  }
`;

const HeroImageContainer = styled.div`
  width: auto;
  height: 100%;
  min-height: 25rem;
  white-space: nowrap; 
  transform: translateX(-${props => props.slidePage}%);
  transition: 0.5s ease-in-out;

  > img {
    display: inline-block;
    width: 100%;
    height: 100%;
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
    padding: 5rem 2.5rem 0 2.5rem;
  }
`;

const AboutSection = styled.div`
`;

const AboutImage = styled.div`

`;

const AboutDescription = styled.div`
  background-color: #000;
`;

function HomePage() {
  const [slidePage, setSlidePage] = useState(0)

  const handlePageMinus = () => {
    setSlidePage(slidePage - 1)
    if (slidePage < 1) {
      setSlidePage(2)
    }
  }

  const handlePagePlus = () => {
    setSlidePage(slidePage + 1)
    if (slidePage > 1) {
      setSlidePage(0)
    }
  }

  return (
    <>
      <Hero>
        <HeroContainer>
          <HeroImage>
            <HeroImageContainer slidePage={slidePage * 100}>
              <img src={hero} alt="hero"></img>
              <img src={about_1} alt="hero"></img>
              <img src={hero} alt="hero"></img>
            </HeroImageContainer>

            <SliderButtons>
              <ArrowButton direction={"left"} handleClick={handlePageMinus} />
              <ArrowButton direction={"right"} handleClick={handlePagePlus} />
            </SliderButtons>
          </HeroImage>
          <HeroContent>
            <H1>Discover innovative way to play</H1>
            <P>This is a website for you to choose your lovely toys. It’s not only funny but also healthy and safe. Pick it up for fun.</P>
            <GoButton content={"SHOP NOW"} route={"shop"} />
          </HeroContent>
        </HeroContainer>
      </Hero>

      <AboutSection>
        <AboutImage></AboutImage>
        <AboutDescription></AboutDescription>
        <AboutImage></AboutImage>
      </AboutSection>
    </>
  );
}

export default HomePage;
