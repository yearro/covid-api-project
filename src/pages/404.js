import React from "react";
import dogImage from '../assets/img_404.png'
const NotFound = () => {
  return(
    <article className='message has-text-centered'>
      <div className='message-body'>
      <h2 className='title is-2'>We are sorry ! ! !</h2>
      <h3 className='title is-3'>We can't find what you are looking for</h3>
      <img src={dogImage} alt='Not found' width='400px' height='400px'/>
      </div>
    </article>
  )
}

export default NotFound