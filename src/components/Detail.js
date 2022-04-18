import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <BackgroundImg>
        <img src='/images/filme-bao.jpg' alt='' />
      </BackgroundImg>
      <Title>
        <img src='/images/bao-title.png' alt='' />
      </Title>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' alt='' />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' alt='' />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatch>
          <img src='/images/group-icon.png' alt='' />
        </GroupWatch>
      </Controls>
      <Subtitle>
        2018 . 7m . Family, Fantasy, Kids, Animations
      </Subtitle>
      <Description>
      Bao is a 2018 American computer-animated short film written and directed by Domee Shi and produced by Pixar Animation Studios. It is the first Pixar short film to be directed by a female director.
      </Description>
    </Container>
  )
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const BackgroundImg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Title = styled.div`
  width: 35vw;
  min-width: 200px;
  height: 40vh;
  min-height: 170px;
  padding-top: 30px;
  margin-bottom: 10px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;


  &:hover {
    background-color: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatch = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`

const Subtitle = styled.div`
  font-size: 1.2rem;
  color: rgb(249, 249, 249);
  margin-top: 10px;
`
const Description = styled.div`
  font-size: 1.2rem;
  color: rgb(249, 249, 249);
  margin-top: 10px;
  max-width: 450px;
  line-height: 1.4;
`