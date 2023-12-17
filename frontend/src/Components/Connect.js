import React from 'react'
import connectimg from "../assets/img/contact-img.svg"
function Connect() {
  return (
    <section className='connect' id='connect'  > 
    <div className="connectleft" data-aos="fade-down" data-aos-duration="1000">
<img src={connectimg} alt="" />
    </div>
    <div className="connectright">
       <h3 data-aos="fade-down" data-aos-duration="200">connect</h3> 
       <form action="" className='form'>
        <div className="name" data-aos="fade-down" data-aos-duration="400">

  <input type="text" id='firstname' name='firstname' required  className='input-field' placeholder='FirstName'/>
  <input type="text" id='firstname' name='firstname' required  className='input-field' placeholder='lastName'/>
        </div>
        <input type="email" name='email' placeholder='email' className='input-fieldemail' data-aos="fade-down" data-aos-duration="600" />
        <textarea name="message"  cols="30" rows="10" placeholder='Enter your message here' data-aos="fade-down" data-aos-duration="800"></textarea>
        <button data-aos="fade-down" data-aos-duration="1000">submit</button>
       </form>
    </div>
    </section>
  )
}

export default Connect
