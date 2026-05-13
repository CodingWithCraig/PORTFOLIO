import NavBar from "../components/navbar";
import IGProfile from "../assets/Head.png";
import '../PageStyles/home.css';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
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
import ProjectsSection from "../components/projects";
import { useState } from "react";
import Footer from "../components/footer";
import emailjs from "@emailjs/browser";


export default function Home() {
  const [formData, setFormData] = useState({ fullName: "", email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_f8ct1zt"; // Replace with your EmailJS service ID
    const templateID = "template_d8rrgyt"; // Replace with your EmailJS template ID
    const publicKey = "kWDeHBJrboAs0a7HC"; // Replace with your EmailJS public key

    const templateParams = {
      name: formData.fullName, // Updated to match the EmailJS template placeholder
      email: formData.email, // Ensure this matches the "Reply To" field in the template
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for reaching out! Your message has been sent successfully.");
          setFormData({ fullName: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div>
      <NavBar />

      <div id="home">
      <div className="welcomeContainer" id="home">
        <div className="welcomeC1">
            <h2>HI THERE!</h2>
            <h1>I'm Craig</h1>
            <h3>Full-stack developer/ Junior-Developer</h3>
        </div>

        <div className="welcomeC2">
            <img src={IGProfile} alt="IG profile" className="Profile"/>

            <div className="contactC">
                <p className="mail"><a href="mailto:clkhlongwani2@gmail.com" target="_blank" rel="noopener noreferrer"><IoIosMail size={25} color="white" /> </a></p>
                <p className="phone"><a href="tel:+27658328829" target="_blank" rel="noopener noreferrer"><FaPhone size={25} color="white" /> </a></p>
                <p className="linkedin"><a href="https://www.linkedin.com/in/craig-hlongwani-447920359" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={24} color="white" /></a></p>
                <p className="github"><a href="https://github.com/CodingWithCraig" target="_blank" rel="noopener noreferrer"><FaGithub size={22} color="white" /> </a></p>
            </div>
        </div>
      </div>
      </div>

      <div className="aboutBtnContainer">
          <a href="#about" className="aboutBtn">About Me</a>
      </div>

      <div id="skills">
        <div className="skillsContainer">
          <h1 className="skillTitle">MY SKILLS</h1>

          <div className="skillC">
            <h2>Programming Languages</h2>
            <ul className="pl-skills">
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
                  <FaCss3 size={45} color="white" />
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
        </div>
      </div>

      <hr />

      <div id="about">
        <div className='aboutContainer'>
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
            software solutions that create real impact. <br />
            <a href="#" className="cvDownloadBtn">View CV</a>
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
          </div><br />

          <div className="interests">
            <h2>Interests</h2>
            <ul className="aboutList">
              <li><MdDesignServices size={20} color="darkgray" /> Designing</li>
              <li><FaReadme size={20} color="darkgray" /> Reading</li>
              <li><IoGameController size={20} color="darkgray" /> Gaming</li>
              <li><MdModeOfTravel size={20} color="darkgray" /> Traveling</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="contact">
        <div className="contactContainer">
          <h2 className="contactTitle">Contact</h2>

          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Messages"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="submitButton">Submit</button>
          </form>

          <div className="contactInfo">
            <h3>Get in touch with me!</h3>
            <p>Let's talk!</p>
            <ul>
              <li><IoIosMail size={20} /> clkhlongwani2@gmail.com</li>
              <li><FaPhone size={20} /> +27658328829</li>
              <li><IoLogoLinkedin size={20} /> <a href="https://www.linkedin.com/in/craig-hlongwani-447920359" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><FaGithub size={20} /> <a href="https://github.com/CodingWithCraig" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}