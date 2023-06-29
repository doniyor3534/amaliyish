import React from 'react';
import MapFun from './Maps';
import imgfon from '../img/contactimg4.jpg'


const Contact = () => {

  return (
    <div className='contact'>
         <img src={imgfon} className='contactimgfone' alt="" />
         <MapFun/>
         <div className="textblock">
            <h1>Biz bilan bog'laning</h1>
            <form >
               <label htmlFor="username">Username</label>
               <input type="text" id='username' placeholder='username kiriting' />
               <label htmlFor="email"> email</label>
               <input type="email" placeholder='emailingizni kiriting' />
               <label htmlFor="text">izoh qoldiring</label>
               <textarea name="text" id="text" cols="30" rows="4"  placeholder='izoh kiriting' ></textarea>
               <button>submit</button>
              <a href="+998991101197">+99899 110 11 97</a>
              <a href="doniyorbektursunov800@gmail.com">doniyorbektursunov800@gmail.com</a>
            </form>
         </div>
    </div>
  )
}

export default Contact
