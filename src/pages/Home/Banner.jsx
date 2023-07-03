/* eslint-disable react/no-unescaped-entities */

import { FaFileDownload, FaPhoneSquareAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTypewriter } from "react-simple-typewriter";
const Banner = () => {
   const [text] = useTypewriter({
     words: ["Mern Stack Developer !", "Full Stack Developer !", "Front-End Developer !"],
     loop: 0,
   });


   
    return (
      <div
        id="home"
        className="mb-16 my-8 md:my-5 md:pt-28 mx-auto flex md:flex-row flex-col-reverse justify-around gap-5"
      >
        <div className="md:w-1/2 md:ml-16  md:pt-12 space-y-5">
          <h1 className="md:text-4xl text-2xl font-semibold dark:text-[#8892B0]">
            Hi,<br></br> I am Zubaer Hossain !!!
          </h1>
          <h1 className="md:text-4xl text-2xl font-semibold dark:text-[#8da7ee]">
            I am a {text}
          </h1>
          {/* <Cursor cursorColor="green" /> */}
          <p className="sm:mb-10 text-justify leading-6 dark:text-[#8892B0] ">
            Welcome to my portfolio!!!  I aim to master the MERN technologies (MongoDB, Express.js, React.js, Node.js) and build scalable, efficient, 
            and secure web solutions. I look forward to collaborating with cross-functional teams, staying updated with emerging technologies, and
             continuously improving my problem-solving and development skills. Ultimately, my goal is to contribute to impactful projects and advance
              my career in web development. I am a passionate Mern stack web developer with expertise in HTML, CSS, JavaScript, React, Express.js, Node.js,
               and MongoDB. With a strong foundation in front-end development, I strive to create captivating user
            interfaces and seamless user experiences. I enjoy turning ideas into functional and visually appealing websites and Web Applications.
          </p>
          <div className="flex  gap-5">
            <a href="https://drive.google.com/file/d/1ILwym6on5wZpjswXn65mJ2s9lorqg-57/view?usp=drive_link" download>
              <button
                type="submit"
                className="text-yellow-300 bg-gradient-to-r from-[#62d118] to-purple-800 hover:from-blue-700 flex justify-center items-center gap-1 text-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-600"
              >
                Download Resume
                <span>
                  <FaFileDownload></FaFileDownload>
                </span>
              </button>
            </a>
            <HashLink to="#contact" smooth>
              <button
                type="submit"
                className="text-yellow-300 bg-gradient-to-r from-[#62d118] to-purple-800 hover:from-blue-700 flex justify-center items-center gap-1 text-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-600"
              >
                Hire Me!
                <span>
                  <FaPhoneSquareAlt></FaPhoneSquareAlt>
                </span>
              </button>
            </HashLink>
          </div>
        </div>
        <div className="md:w-1/2">
         
          <div className="relative flex justify-center items-center">
            <div className="absolute duration-5"></div>
            <img
              src="https://i.ibb.co/fH4mhNq/Zubaer-Hossain300x350.jpg"
              className="rounded-md my-20 h-96 w-96 "
            />
      
          </div>
        </div>
        
      </div>
    );
};

export default Banner;