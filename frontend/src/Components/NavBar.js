import React from 'react'

function NavBar() {



  return (
    <header className = {`header `} id="head">
      <a href='/' className='logo'><h3>DevelopWithAyush</h3></a>
      <nav className="navbar" id="nav">
        <a className='navbaritem'  href="/">Home</a>
        <a className='navbaritem'  href="/">Skills</a>
        <a className='navbaritem'  href="/">Project</a>
       
      </nav>
      <div className="socialicon">
          <a href='/' className=" socialmedia instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href='/' className=" socialmedia github"><i class="fa-brands fa-github"></i></a>
          <a href='/' className=" socialmedia facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href='/' className=" socialmedia x"><i class="fa-brands fa-x-twitter"></i></a>
          <a href='/' className=" socialmedia linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
          
        </div>
    </header>
  )
}

export default NavBar
