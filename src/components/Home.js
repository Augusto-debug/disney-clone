import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

function Home() {
  return (
    <Container>
        <ImgSlider />
        <Viewers />
    </Container>
  )
}

export default Home;

const Container = styled.main`
   min-height: calc(100vh - 70px);
   padding: 10px calc(3.5vw + 5px);
   position: relative;
   overflow-x : hidden;
   
   &:before {
    content: "";
    background-image: url('/images/home-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
   }
`;