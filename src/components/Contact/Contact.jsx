import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <>
  <div className="section">
  <div className="contact-heading" id="contact">
    <span>Let’s Collaborate</span>
    <h1>Get In Touch</h1>
</div>
  </div>
      <div className="contact-container" id='contact'>
      
      {/* <form action="https://formspree.io/f/xbjvngze" method='post' className='form'>
        <input type="text" name='Name' placeholder='Name' autoComplete='off' required />
        <input type="email" name='Email' placeholder='Email' autoComplete='off' required />
        <textarea name="message"  cols="30" rows="10"  placeholder='Send message'></textarea>
        <button className="contact-btn" type='submit'>Send</button>
      </form> */}
      <form action="https://getform.io/f/ea28e4ff-aeb8-4ed0-bc61-662c8c5dd916" method='post' className='form'>
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
