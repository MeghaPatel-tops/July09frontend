import React from 'react'
import styled from 'styled-components'

function Hero() {
    const Herodiv = styled.div`
           background-color: lightpink;
            height: 400px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
    `
    const Title = styled.h1`
         color:"brown"
    `
  return (
    <div >
        <Herodiv>
            <Title>
                Hello World! This is my first Styled comp
            </Title>
        </Herodiv>
    </div>
  )
}

export default Hero