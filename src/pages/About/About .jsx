
import "animate.css";
import {  FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
// import Header from "./Header";
import "animate.css";
import { HashLink } from "react-router-hash-link";

const AboutMe = () => {
  return (
    <div id="about">
    <div  className="h-5/6 mx-20  dark:text-[#8892B0]" data-aos="fade-up">
       <p className="shadow-lg shadow-white  bg-gradient-to-r 
                from-[#62d118] to-purple-800 text-6xl text-center text-yellow-300 font-bold mb-20 mt-20">
            About Me
          </p> 
         
      <div className="flex flex-col dark:text-[#8892B0] md:flex-row align-middle">
        <div className="flex flex-col m-3 md:w-1/2">
        
          <p className="text-6xl  border font-mono rounded-lg shadow-lg p-6 mt-3 mb-3 animate__animated animate__slideInLeft animate__delay-2s">
            Zubaer Hossain
          </p>
          <p className="text-3xl border rounded-lg shadow-lg p-6 mb-3 animate__animated animate__slideInLeft animate__delay-3s">
            I am a Web Developer
          </p>
          <p className="text-2xl dark:text-[#8892B0] border rounded-lg shadow-lg p-6 mb-3 animate__animated animate__slideInLeft animate__delay-4s">
            I have a passion for creating intuitive<br></br> and user-friendly
            web experiences.
          </p>
        </div>
        <div className="m-3 p-3 leading-6 dark:text-[#8892B0] border text-justify shadow-lg rounded-lg md:w-1/2 animate__animated animate__slideInRight animate__delay-5s">
          <p>
            I am a Highly motivated web developer with a passion for creating
            visually appealing and user friendly websites. I am a continuous
            learner and always stay up to date with emerging web technologies.
            Committed to delivering exceptional user experiences and driving
            innovation in web development industry.I am constantly seeking
            opportunities to challenge myself and push the boundaries of what
            can be achieved on the web.
          </p>
          <div className="mt-3 ms-3 pt-6">
            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
            <div className="">
              {/* TODO:  */}
              <HashLink to="#home" smooth>
              <img
                className="w-20 h-20 item-center"
                src="https://i.ibb.co/fH4mhNq/Zubaer-Hossain300x350.jpg"
                alt=""
              />
            </HashLink>
              <a href="https://www.facebook.com/zubaer.juel" target="blank">
                <FaFacebook className="btn btn-circle me-4"></FaFacebook>
              </a>
              <a href="https://github.com/ZubaerJewel" target="blank">
                <FaGithub className="btn btn-circle me-4"></FaGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/md-zubaer-hossain-04935b102/"
                target="blank"
              >
                <FaLinkedin className="btn btn-circle me-4"></FaLinkedin>
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;