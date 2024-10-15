

import React from 'react';
// import Typed from 'typed.js';
import "./HeroStyle.css";

const Hero = () => {
  // const typedRef = useRef(null);  // Create a reference to attach typed.js

  // useEffect(() => {
  //   const typed = new Typed(typedRef.current, {
  //     strings: ["I'm a Passionate MERN STACK DEVELOPER"],  // Add more phrases if needed
     
  //     typeSpeed: 70,
  //           backSpeed: 70,
  //           loop: true,
  //           backDelay: 2500,
     
  //   });

  //   return () => {
  //     typed.destroy();  // Cleanup to avoid memory leaks
  //   };
  // }, []);

  return (
    <div className='container' id='Home'>
     
      <div className="mask"></div>
      <div className="hero-container">
      <div className="hero-detail">
          <span className='span'>HY ! I AM</span>
          <h1>ANAS</h1>
          <h1>MEHMOOD</h1>
          <p>I'm a Passionate <span>MERN STACK DEVELOPER</span></p>
          {/* Typed.js effect here */}
         
        </div>
        {/* <div className='type'><span ref={typedRef} className="typed-text"></span></div> */}
        
      </div>
      
    </div>
  );
};

export default Hero;
