import React from 'react'
import {useRef, useLayoutEffect} from 'react';
import styled from 'styled-components'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Accordion from '../Accordion'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${(props) => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: uppercase;
color: ${(props) => props.theme.text};
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
}
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-content: center;
`

const Box = styled.div`
width: 45%;
`


const Faq = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    })

    return () => {
      ScrollTrigger.kill();
    }

  }, [])

  return (
    
    <Section ref={ref} id="faq">
      <Title> Faq</Title>
      <Container>
        <Box>
          <Accordion title="WHAT IS NFT?">
            NFTs ("Non-Fungible Tokens") are one-of-a-kind tokens that represent a unique good or asset, like digital art. They can be sold in to collectors and the sale of NFTs.
          </Accordion>
          <Accordion title="HOW CAN I BUY YUZUI NFT?">
            Minting of YUZUI NFT Collection will take place on the MagickEden marketplace located on the Solana Blockchain.
          </Accordion>
          <Accordion title="HOW CAN I SEE MY NFT?">
            After minting NFT you can see it in your Wallet which supports Solana Blockchain.
          </Accordion>
          <Accordion title="WHEN MINT WILL BE AVAILABLE?">
            Mint date will be announced in our Twitter and Discord. Don't miss it!
          </Accordion>
        </Box>
        <Box>
          <Accordion title="HOW MANY NFTs I CAN MINT?">
            Mint will be divided into 2 phases: the whitelist will be able to buy up to 3 NFT per account,
            public sale will be available to buy 1 NFT per account.
          </Accordion>
          <Accordion title="HOW MANY YUZUIs ARE IN TITAL SUPPLY?">
            Our collection consists of 2222 NFTs.
          </Accordion>
          <Accordion title="SECONDARY MARKET">
            We chose MagickEden as a secondary market, so you can buy/sell Yuzui NFT there.
          </Accordion>
          <Accordion title="WHAT REWARDS AND BENEFITS WILL I RECIEVE FOR HOLDING YUZUI NFT?">
            We have thought of many different events, physical and digital rewards for our NFT holders. Everyone will be rewarded!
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq