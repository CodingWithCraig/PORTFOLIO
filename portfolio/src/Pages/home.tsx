
import NavBar from "../components/navbar";
import IGProfile from "../assets/Head.png";
import '../PageStyles/home.css';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa"
import { FaCss } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { PiFileCpp } from "react-icons/pi";
import { PiFileCSharpBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaReadme } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdModeOfTravel } from "react-icons/md";






export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="welcomeContainer" id="home">
        <div className="welcomeC1">
            <h2>HI THERE!</h2>
            <h1>I'm Craig</h1>
            <h3>Full-stack developer/ Junior-Developer</h3>

        </div>

        <div className="welcomeC2">
            <img src={IGProfile} alt="IG profile"  className="Profile"/>

            <div className="contactC">
                {/* <h2>Contact Me</h2> */}
                <p className="mail"><a href="mailto:clkhlongwani2@gmail.com" target="_blank" rel="noopener noreferrer"><IoIosMail size={25} color="white"  /> </a></p>
                <p className="phone"><a href="tel:+27658328829" target="_blank" rel="noopener noreferrer"><FaPhone size={25} color="white" /> </a></p>
                <p className="linkedin"> <a href="https://www.linkedin.com/in/craig-hlongwani-447920359" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={24} color="white" /></a></p>
                <p className="github"><a href="https://github.com/CodingWithCraig" target="_blank" rel="noopener noreferrer"><FaGithub size={22} color="white" /> </a></p>

            </div>

        </div>

      </div>

        
        <div className="aboutBtnContainer">
            <a href="#about" className="aboutBtn" >About Me</a>
        </div>


        <div className="skillsContainer" id="skills">

            <h1 className="skillTitle"> MY SKILLS</h1>

            <div className="skillC">
            <h2>Programming Launguages</h2>

            <ul className="pl-skills">

                {/* <li className="skill-item">
                    <div>
                    <RiJavascriptFill size={45} color="white" />
                    <p>JavaScript</p>
                    </div>
                </li> */}
                <li className="skill-item">
                    <div>
                    <BiLogoTypescript size={45} color="white" />
                    <p>TypeScript</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <FaPython size={45} color="white" />
                    <p>Python</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <PiFileCpp size={45} color="white" />
                    <p>C++</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <PiFileCSharpBold size={45} color="white" />
                    <p>C#</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <FaHtml5 size={45} color="white" />
                    <p>HTML</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <FaCss size={45} color="white" />
                    <p>CSS</p>
                    </div>
                </li>
            </ul>

            </div>


            <div className="skillC">
            <h2>Frameworks</h2>

            <ul className="pl-skills">

                <li className="skill-item">
                    <div>
                    <FaReact size={45} color="white" />
                    <p>React</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <RiNextjsFill size={45} color="white" />
                    <p>Next.js</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <FaNodeJs size={45} color="white" />
                    <p>Node.js</p>
                    </div>
                </li>
             </ul>

            </div>
            <div className="skillC">
            <h2>Libraries & Database</h2>

            <ul className="pl-skills">

                <li className="skill-item">
                    <div>
                    <DiMongodb size={45} color="white" />
                    <p>MongoDB</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <SiFirebase size={45} color="white" />
                    <p>Firebase</p>
                    </div>
                </li>
                <li className="skill-item">
                    <div>
                    <SiMysql size={45} color="white" />
                    <p>MySQL</p>
                    </div>
                </li>
             </ul>

            </div>



        </div><hr />


        <div className='aboutContainer' id="about">
            <h2 className='aboutTitle'>ABOUT ME</h2>

            <p>
                My name is Craig Hlongwani, 
                a results-driven Software Engineer with a 
                strong foundation in both front-end and 
                back-end development, passionate about 
                building modern, scalable, and user-focused 
                applications. Skilled in developing clean, 
                efficient, and visually engaging digital 
                solutions while solving complex technical 
                challenges. Experienced with modern development 
                technologies and frameworks, with a continuous 
                drive to learn, adapt, and improve. Strong 
                collaborator with excellent problem-solving 
                abilities, committed to delivering high-quality
                 software solutions that create real impact.
            </p>

            <div className="softSkills">
            <h2>Soft Skills</h2>

            <ul className="aboutList">
                <li>Problem Solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Adaptability</li>
                <li>Time Management</li>
                
            </ul>
            </div>
            <div className="interests">
            <h2>Interests</h2>

            <ul className="aboutList">
                <li> <MdDesignServices size={20} color="darkgray" /> Designing</li>
                <li> <FaReadme size={20} color="darkgray" /> Reading</li>
                <li> <IoGameController size={20} color="darkgray" /> Gaming</li>
                <li> <MdModeOfTravel size={20} color="darkgray" /> Traveling</li>
                
            </ul>
            </div>
        </div>


        <div className="projectsContainer">
            <h2 className="projectTitle">PROJECTS</h2>

        </div>


    </div>
  );
}