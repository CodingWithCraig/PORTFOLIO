
import NavBar from "../components/navbar";
import IGProfile from "../assets/Head.png";
import '../PageStyles/home.css';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";




export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="welcomeContainer">
        <div className="welcomeC1">
            <h2>HI THERE!</h2>
            <h1>I'm Craig</h1>
            <h3>Full-stack developer/ Junior-Developer</h3>

        </div>

        <div className="welcomeC2">
            <img src={IGProfile} alt="IG profile"  className="Profile"/>

            <div className="contactC">
                {/* <h2>Contact Me</h2> */}
                <p className="mail"><IoIosMail size={25} color="white"  /> <a href="mailto:clkhlongwani2@gmail.com" target="_blank" rel="noopener noreferrer">clkhlongwani2@gmail.com</a></p>
                <p className="phone"><FaPhone size={25} color="white" /> <a href="tel:+27658328829" target="_blank" rel="noopener noreferrer">+27658328829</a></p>
                <p className="linkedin"><IoLogoLinkedin size={24} color="white" /> <a href="https://www.linkedin.com/in/craig-hlongwani-447920359" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p className="github"><FaGithub size={22} color="white" /> <a href="https://github.com/CodingWithCraig" target="_blank" rel="noopener noreferrer">GitHub</a></p>

            </div>

        </div>

      </div>

        <a href="#about" className="aboutBtn" >About Me</a>
    </div>
  );
}