import React from "react";
import styled from 'styled-components';
import imgLogo from '../assets/logo-covid-api.jpg'

const Link = ({ className, children }) => (
  <a href='/' className={className}>
    {children}
  </a>
)

const StyledLink = styled(Link)`
cursor: pointer;`

const Logo = () => (
    <StyledLink>
      <img src={imgLogo} width='112' height='28' alt='Covid logo' />
    </StyledLink>
  )

export default Logo