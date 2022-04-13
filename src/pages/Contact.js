import React from 'react';
import ContactForm from '../components/contactForm/contactForm';
import ContactInfo from '../components/contactInformation'

const Contact = () => (
  <div className='columns'>
    <div className='column is-half'>
      <ContactInfo />
    </div>
    <div className='column is-half'>
      <ContactForm />
    </div>
  </div>
)

export default Contact