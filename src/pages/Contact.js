import React from 'react';
import ContactForm from '../components/contactForm/contactForm';
const Contact = () => (
  <div className='columns'>
    <div className='column is-half'>
      <p className='bd-notification is-primary'>
        <code className='html'>is-half</code>
      </p>
    </div>
    <div className='column is-half'>
      <ContactForm />
    </div>
  </div>
)

export default Contact