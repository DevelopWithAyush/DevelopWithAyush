import React from 'react'
import Connectbtn from './Connectbtn'
import Typed from 'typed.js';

function Banner() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['MERN Developer', 'wordpress developer'],
        typeSpeed: 120,
        backSpeed:50,
        loop:true,
        showCursor:false
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);




  return (
  <section className='banner'>
    <div className="left-banner">
        <p>hey there</p>
        <h2>i am a <span ref={el}>wordpress developer</span></h2>
        <p>Hello, I am <span>Ayush Dubey </span>, currently pursuing my B.Tech at MNIT Jaipur. I have been actively involved in website development for the past year.</p>
   <Connectbtn/>
    </div>
    <div className="right-banner">
        <img src="" alt="" />
    </div>
    
  </section>
  )
}

export default Banner
