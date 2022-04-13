import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo'
import './header.scss'

const Header = () => (
  <>
    <nav className='header-contanier'>
      <div>
       <Logo />
      </div>
      <div>
        <div className='buttons'>
         <Link to="/aboutUs" className="button is-danger">
            <strong>About us</strong>
          </Link>
          <Link to="/contact" className="button is-danger">
            <strong>Contact</strong>
          </Link> 
        </div>
      </div>
    </nav>
  </>)

export default Header