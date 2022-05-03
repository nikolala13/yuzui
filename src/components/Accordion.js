import React, {useState} from 'react'
import styled from 'styled-components'


const Container = styled.div`
cursor: pointer;
padding: 1rem 0.5rem;
display: flex;
flex-direction: column;
border-bottom: 1px solid ${props => props.theme.text};
margin: 3rem 0;
`

const Title = styled.div`
font-size: ${props => props.theme.fontlg};
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 900;
`

const Reveal = styled.div`
display: ${props => props.clicked ? 'block' : 'none'};
margin-top: 1rem;
color: ${props => `rgba(${props.theme.text}, 0.6)`};
font-size: ${props => props.theme.fontlg};
font-weight: 300;
line-height: 1.1rem;
`

const Name = styled.div`
display: flex;
align-items: center;
`

const Indicator = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => props.theme.fontlg};
`

const Accordion = ({title, children}) => {
    const [collapse, setCollapse] = useState(false)
  return (
    <Container>
        <Title onClick={() => setCollapse(!collapse)}>
        <Name>
            <span>{title}</span>
        </Name>
        {
            collapse ? 
            <Indicator>-</Indicator> : <Indicator>+</Indicator>
        }   
        </Title>
        <Reveal clicked={collapse}>
            {children}
        </Reveal>
    </Container>
  )
}

export default Accordion