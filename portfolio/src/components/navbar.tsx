import '../componentStyles/navbar.css';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";


export default function NavBar(){
    const [isNavVisible, setIsNavVisible] = useState(true);


    function showNav(){
        setIsNavVisible(!isNavVisible);
    }

    return(
        <>
        <ul className="PortNav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>

        <div className='mobileMenu'>
    {isNavVisible ? (
        <FaBars size={45} color='white' className="mobiBar" onClick={showNav} />
     ) : (
        <>
         <div>
            <FaBars size={45} color='white' className="mobiBar" onClick={showNav} />
         </div>


        <ul className="PortNav2">
            <li><a href="#home" onClick={showNav}>Home</a></li>
            <li><a href="#about" onClick={showNav}>About</a></li>
            <li><a href="#skills" onClick={showNav}>Skills</a></li>
            <li><a href="#projects" onClick={showNav}>Projects</a></li>
            <li><a href="#contact" onClick={showNav}>Contact</a></li>

        </ul>
        </> 


    )}

        </div>


            </>
    )
}