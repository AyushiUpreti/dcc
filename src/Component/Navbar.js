import React, {useState} from 'react';
import './Navbar.css';
import { AiOutlineMenu } from 'react-icons/ai';
import {BsXLg} from 'react-icons/bs';
import photo from '../Assests/Logo-for-website-300x120.webp';

const Navbar = () => {
    const[click,setClick]=useState(false);

    const clickIcon=()=>{
      setClick(!click);
  }
 
  return (
    <div >
    <nav className="navbar nav">
      <a href='index.html'>
        <div className="div">
      <img className='dcc-logo' src={photo} width="70%" alt="" />
      </div>
      </a>
      <div>
        <ul className={click===true? "navItems active": "navItems"}>
          <li>
            <a className='active' href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">About us</a>
          </li>
          <li>
            <a href="index.html">Services</a>
          </li>
          <li>
            <a href="index.html">Our Work</a>
          </li>
          <li>
            <a href="index.html">Blog</a>
          </li>
          <li>
            <a href="index.html">Careers</a>
          </li>
          <li>
            <a href="index.html">Contact us</a>
          </li>

        </ul>
      </div>
      <div id='mobile'>
        <i onClick={clickIcon} >{click===false ? <AiOutlineMenu/> : <BsXLg/>} </i>
      </div>
    </nav>
  </div>
)
}


export default Navbar
