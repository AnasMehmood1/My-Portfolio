import React from 'react'
import "./FooterStyle.css"

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="main_section">
            <h1 className="talk"> Let's Talk</h1>
           <ul >
            <li> <a href="https://web.facebook.com/anas.mehmood.921230/"><i class="fa-brands fa-facebook"></i></a></li>
            <li> <a href="https://www.instagram.com/anas.mehmood.921230/"><i class="fa-brands fa-instagram"></i></a></li>
            <li> <a href=""><i class="fa-brands fa-square-twitter"></i></a></li>
           </ul>
           <p className="copyright">&copy; Copyright by AnasMehmood</p>
        </div>
      </div>
    </>
  )
}

export default Footer
