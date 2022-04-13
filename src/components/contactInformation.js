import React from "react";
import styled from 'styled-components';

import imgPhone from '../assets/telephone.png'
import imgMail from '../assets/envelope.png'

const Container = styled.div`
  text-align: center;
  padding: 10px;
`
const Information = styled.p`
  padding: 10px;
`
const Title = styled.p`
 padding: 10px;
 font-size: 3rem;
 color: #485fc7;
`


const contactInformation = () => (
  <Container>
    <Title>
      Get in contact with us
    </Title>
    <Information>
      <img src={imgPhone} alt="telephone" width="18" height="18"/> 55 55 3453 3456
    </Information>
    <Information>
      <img src={imgMail} alt="telephone" width="18" height="18"/> information@protonmail.com
    </Information>
  </Container>
)

export default contactInformation;