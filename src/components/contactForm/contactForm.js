import React, { useState } from 'react'
import './contactForm.scss'
import { ValidateEmail } from '../../utils'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showForm, setShowForm] = useState(true)
  const handlerEmail = (event) => setEmail(event.target.value)
  const handlerMessage = (event) => setMessage(event.target.value)

  const handlerCancel = () => {
    setMessage('')
    setEmail('')
  }
  const handlerSubmit = () => {
    if(ValidateEmail(email) && message.length > 20) {
      setShowForm(false)
    }
  }
  const handlerShowForm = () => {
    setShowForm(!showForm)
  }
  return(
    <> {
      showForm ?
        <div className='contact-container'>
          <div className='field'>
            <label className='label'>Email</label>
            <div className='control has-icons-left has-icons-right'>
              <input
                className='input'
                type='email'
                placeholder='Email'
                onChange={handlerEmail}
                value={email}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Message</label>
            <div className='control'>
              <textarea
                className='textarea'
                placeholder='Textarea'
                onChange={handlerMessage}
                value={message}
              ></textarea>
            </div>
          </div>
          <div className='field is-grouped'>
            <div className='control'>
              <button className='button is-link' onClick={handlerSubmit}>Submit</button>
            </div>
            <div className='control'>
              <button className='button is-link is-light' onClick={handlerCancel}>Cancel</button>
            </div>
          </div>
        </div> :
        <article className='message is-success'>
          <div className='message-header'>
            <p>Success</p>
            <button className='delete' aria-label='delete' onClick={handlerShowForm}></button>
          </div>
          <div className='message-body'>
            We received your information and we will contact you soon
          </div>
        </article>
      }
    </>
  )
}

export default ContactForm