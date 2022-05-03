import React from 'react'
import styled from 'styled-components';

import img1 from '../../assets/tima.jpg';
import img2 from '../../assets/valya.jpg';
import img3 from '../../assets/nikita.jpg';
import img4 from '../../assets/danya.jpg';
import img5 from '../../assets/kolya.jpg';


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
`

const Title = styled.h1`
margin-top: 2em;
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
margin: 0.5rem auto;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;
}
`

const Container = styled.div`
color: ${(props) => props.theme.body};
width: 70%;
margin: 4rem auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

const Item = styled.div`
width: calc(20rem-4vw);
padding: 1rem 0;
color: ${props => props.theme.text};
margin: 2rem 1rem;
position: relative;
z-index: 5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.body};
border-radius: 20px;
`

const ImageContainer = styled.div`
width: 17.5rem;
margin: 0.4rem 1.35rem;
background-color: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};
cursor: pointer;

img{
  width: 100%;
  height: auto;
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.body};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.bodyRgba},0.9)`};
font-weight: 400;
`

const MemberComponent = ({img, name= " ", position= " "}) => {

  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )

}


const Team = () => {
  return (
    <Section id="team">
    <Title>Team</Title>
    <Container>
    <MemberComponent img={img1} name="Sullost" position='Managment' />
    <MemberComponent img={img2} name="Stavrogin" position='Co-Founder' />
    <MemberComponent img={img3} name="NwY" position='Artist' />
    <MemberComponent img={img4} name="Matremer" position='Founder' />
    <MemberComponent img={img5} name="Legend" position='Founder' />
    </Container>
    </Section>
  )
}

export default Team