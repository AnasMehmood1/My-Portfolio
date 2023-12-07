import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <>
     
      <div className="contact-container" id='contact'>
      <div className="contact-heading">
            <span>Let's Contact</span>
            <h1>Contact Us</h1>
        </div>
      <form action="https://formspree.io/f/xbjvngze" method='post' className='form'>
        <input type="text" name='Name' placeholder='Name' autoComplete='off' required />
        <input type="email" name='Email' placeholder='Email' autoComplete='off' required />
        <textarea name="message"  cols="30" rows="10"  placeholder='Send message'></textarea>
        <button className="contact-btn" type='submit'>Send</button>
      </form>
      </div>
    </>
  )
}

export default Contact
