import React from 'react'
import "./FooterStyle.css"

const Footer = () => {
  return (
    
    <>
      <div className="footer_section" >
        <div className="main_section">
            {/* <h1 className="talk"> Let's Talk</h1> */}
           <ul >
            <li> <a rel="noreferrer"  href="https://web.facebook.com/anas.mehmood.921230/"target='_blank'><i class="fa-brands fa-facebook"></i></a></li>
            <li> <a rel="noreferrer"  href="https://www.instagram.com/anas.mehmood.921230/" target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
            <li> <a rel="noreferrer" href="https://twitter.com/Anasmehmo0d" target='_blank'><i class="fa-brands fa-twitter"></i></a></li>
            <li> <a rel="noreferrer" href="https://www.linkedin.com/in/anasmehmood1/" target='_blank'><i class="fa-brands fa-linkedin-in"></i></a></li>
           </ul>
           <p className="copyright">&copy; Copyright by AnasMehmood</p>
        </div>
      </div>
    
     
    </>
  )
}

export default Footer
