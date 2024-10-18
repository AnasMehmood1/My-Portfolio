import React, { useEffect, useState } from 'react'
import "./FooterStyle.css"

const Footer = () => {
    
  const [currentYear,setCurrentYear] = useState(new Date().getFullYear())
  const [currentDay, setCurrentDay] = useState(getCurrentDay());
  function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return days[today];
  }
  useEffect(() => {
    // Update the year every second
    const yearInterval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    // Update the day every midnight
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight - new Date();
    const dayInterval = setInterval(() => {
      setCurrentDay(getCurrentDay());
    }, timeUntilMidnight);

    // Clean up intervals on component unmount
    return () => {
      clearInterval(yearInterval);
      clearInterval(dayInterval);
    };
  }, []);

  return (
    
    <>
      <div className="footer_section" >
        <div className="main_section">
            {/* <h1 className="talk"> Let's Talk</h1> */}
           <ul >
            <li> <a rel="noreferrer"  href="https://github.com/AnasMehmood1"target='_blank'><i class="fa-brands fa-github"></i></a></li>
            <li> <a rel="noreferrer"  href="mailto:anasmehmoodvip@gmail.com"target='_blank'><i class="fa-solid fa-envelope"></i></a></li>
            
            <li> <a rel="noreferrer" href="https://x.com/ANAS_MEHMOOD11" target='_blank'><i class="fa-brands fa-twitter"></i></a></li>
            <li> <a rel="noreferrer" href="https://www.linkedin.com/in/anasmehmood1/" target='_blank'><i class="fa-brands fa-linkedin-in"></i></a></li>
           </ul>
           <p className="copyright"> AnasMehmood . &copy;{currentYear} . Have a good {currentDay}</p>
        </div>
      </div>
    
     
    </>
  )
}

export default Footer



