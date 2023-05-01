import React from 'react';
import { IoMdNotifications, IoMdSettings, IoMdPerson } from 'react-icons/io';
import'../css/Navbar.css';


/** 
    *This function will create a Top Horizontal Navbar component.
    @return Navbar
*/

function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
        <h1 className='companyName'> MuckleShoot</h1>
         <ul className= "navElements">
            <li className= "bell"> <a  href = "#" > </a> <IoMdNotifications /> </li>
            <li className= "settings"> <a  href = "#" > </a><IoMdSettings /> </li>
            <li className= "user"> <a  href = "#" >  </a> <IoMdPerson /> </li>  
        </ul>
      
    </nav>
  );
}

export default Navbar;
