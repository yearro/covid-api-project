import React from 'react';
import imgAboutUs from '../assets/about-us.jpeg'
const AboutUs = () => (
  <div className='columns'>
    <div className='column'>
      <p className='bd-notification is-primary has-text-centered'>
        <code className='html'>We are people interested in people's health. Concerned about transparently reporting the current situation regarding Covid 19</code>
        <div>
          <img src={imgAboutUs} alt='About us' />
        </div>
      </p>
    </div>
  </div>
)

export default AboutUs