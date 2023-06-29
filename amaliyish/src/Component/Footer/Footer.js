import React from 'react'
import { NavLink } from 'react-router-dom';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import telegram from '../../img/telegram.png';
import instagram from '../../img/instagram.png';

const Footer = () => {
  return (
    <footer>
        <ul>
            <NavLink to='/' className='logo' >Travel Makkah</NavLink>
                <p className='footerp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi eligendi natus aut eaque consequatur quaerat illum minima laborum distinctio.</p>
        </ul>
        <ul>
            <h4>Aboutme</h4>
            <NavLink to="/about">eligendi</NavLink>
            <NavLink to="/about">eaque</NavLink>
            <NavLink to="/about">commodi</NavLink>
            <NavLink to="/about">distinctio</NavLink>
        </ul>
        <ul>
            <h4>Follow us</h4>
            <a href=""><img src={facebook} alt="" />facebook</a>
            <a href=""><img src={twitter} alt="" />twitter</a>
            <a href=""><img src={telegram} alt="" />telegram</a>
            <a href="https://instagram.com/doniyor35341"><img src={instagram} alt="" />instagram</a>
        </ul>

    </footer>
  )
}

export default Footer
