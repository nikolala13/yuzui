import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ButtonDS from '../components/ButtonDS';
import { dark } from '../styles/Themes';

import img2 from '../assets/Nfts/pic2.svg'
import img3 from '../assets/Nfts/pic3.svg'
import img4 from '../assets/Nfts/pic4.svg'
import img5 from '../assets/Nfts/pic5.svg'
import img6 from '../assets/Nfts/pic6.svg'
import img7 from '../assets/Nfts/pic7.svg'


const Section = styled.section`
width: 100vw;
height: 42rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};
color: ${props => props.theme.body};
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;

overflow: hidden;
`

const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img {
    width: 23%;
    height: 23%;
    margin: 0.5rem 1.5rem;
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: white;
padding: 1rem 2rem;
z-index: 10;
width: 50%; 
`

const BtnContainer = styled.div`
font-size: ${props => props.theme.fontlg};
width: 15%;
display: flex;
justify-content: flex-end;

`

const Banner = () => {
  return (
    <Section>
        <ImgContainer>
            <img src={img2} alt="Yuzui" />
            <img src={img3} alt="Yuzui" />
            <img src={img4} alt="Yuzui" />
            <img src={img5} alt="Yuzui" />
            <img src={img6} alt="Yuzui" />
            <img src={img7} alt="Yuzui" />
        </ImgContainer>
        <Title>
            Join the <br />YUZUI community
        </Title>
        <ThemeProvider theme={dark}>
        <BtnContainer>
        <ButtonDS text="Join Now" link="https://discord.gg/yuzuinft"/>
        </BtnContainer>
        </ThemeProvider>
    </Section>
  )
}

export default Banner