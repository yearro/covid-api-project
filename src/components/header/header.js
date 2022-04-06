import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-covid-api.jpg'
import './header.scss'

const Header = () => (
  <>
    <nav className='header-contanier'>
      <div>
        <Link to="/" className="header-logo">
          <img src={logo} width='112' height='28' alt='Covid logo' />
        </Link>
      </div>
      <div>
        <div className='buttons'>
          <Link to="/contact" className="button is-danger">
            <strong>Contact</strong>
          </Link>
          <Link to="/aboutUs" className="button is-danger">
            <strong>About us</strong>
          </Link>
        </div>
      </div>
    </nav>
  </>)

export default Header