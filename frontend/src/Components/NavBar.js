import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function NavBar() {



  return (
    <header className = {`header `} id="head">
      <a href='/' className='logo'><h3>DevelopWithAyush</h3></a>
      <nav className="navbar" id="nav">
        <Link data-aos="fade-right" data-aos-duration="250"to= "#home" className='navbaritem'>Home</Link>
        <Link data-aos="fade-right" data-aos-duration="500" to= "#skills" className='navbaritem'>Skills</Link>
        <Link data-aos="fade-right" data-aos-duration="750" to= "#project" className='navbaritem'>Project</Link>
        <Link data-aos="fade-right" data-aos-duration="1000" to= "#connect" className='navbaritem'>Connect us</Link>
       
      </nav>
      <div className="socialicon">
          <a href='/' data-aos="fade-right" data-aos-duration="200" className=" socialmedia instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href='/' data-aos="fade-right" data-aos-duration="400" className=" socialmedia github"><i class="fa-brands fa-github"></i></a>
          <a href='/' data-aos="fade-right" data-aos-duration="600" className=" socialmedia facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href='/' data-aos="fade-right" data-aos-duration="800" className=" socialmedia x"><i class="fa-brands fa-x-twitter"></i></a>
          <a href='/' data-aos="fade-right" data-aos-duration="1000" className=" socialmedia linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
          
        </div>
    </header>
  )
}

export default NavBar
