import React from 'react'
import GIF from '../assets/Home Video.mp4'
import styled from 'styled-components'

const VideoContainer = styled.div`
width: 100%;

video {
    width: 90%;
    height: auto;
    margin-right: 5;
}

@media (max-width: 64em) {
  min-width: 40vh;
  align-self: center;
  text-align: center;
}
`


const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo