import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${(props) => props.theme.text};
align-self: flex;

span {
    text-transform: : uppercase;
    font-family: 'Varela Round';
}
.text-1 {
    color: #c90086;
}

.text-2 {
    color: #9900ff;
}

.text-3 {
    color: #fdc200;
}   

@media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
    align-self: center;
    text-align: center;
}
@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}
@media (max-width: 40em) {
    width: 90%;
}
`

const SubTitle = styled.h3`
font-size: ${(props) => props.theme.fontxs};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 90%;
    align-self: center;
    text-align: center;
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
    width: 90%;
}

`

const TypeWriterText = () => {
    return (
        <Title>
            Discover a new era of unique
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('<span class = "text-1">YUZUI NFTs.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class = "text-2">rewards for holders!</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span class = "text-3">events!</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                }}
            />
            <SubTitle>New friendly NFT community.</SubTitle>
        </Title>
    )
}

export default TypeWriterText