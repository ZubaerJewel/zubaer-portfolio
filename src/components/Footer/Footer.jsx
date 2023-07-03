import {
  FaFacebookF,
 
  FaGithub,

  // FaGithubSquare,
  FaLinkedin,
  // FaSnapchat,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" dark:text-white text-black bg-gradient-to-r 
    from-gray-800 via-green-900  to-purple-500  dark:bg-gray pt-12 pb-8 px-4 md:px-10 text-xl mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 text-left">
         
          <img
                className="w-20 h-20 ml-20"
                src="https://i.ibb.co/fH4mhNq/Zubaer-Hossain300x350.jpg"
                alt=""
              />
          <h1 className="text-white font-bold text-2xl ml-9">Zubaer Hossain</h1>
          <h1 className="text-white font-semibold text-lg font-mono ml-9">
            MERN Stack Developer
          </h1>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Navigation</h2>
          <ul className="text-gray-400 text-lg leading-loose">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Contact Us</h2>
          <p className="text-gray-400 text-lg leading-loose">
            123 Main St.
            <br />
            Jashore, Bangladesh
            <br />
            +880 1839666712
            <br />
            zubaer5jewel.160@gmail.com
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <p className="text-white">Follow me</p>
          <a
            href="https://www.facebook.com/zubaer.juel"
            className="relative group"
          >
            <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <svg className="h-6 w-6 text-2xl text-white">
                <FaFacebookF></FaFacebookF>
              </svg>
            </div>
            <span className="absolute -left-16 bottom-0 bg-blue-500 text-white text-sm py-1 px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Facebook
            </span>
          </a>

          <a href="https://github.com/ZubaerJewel" className="relative group">
            <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
              <svg className="h-6 w-6 text-2xl text-white">
                <FaGithub></FaGithub>
              </svg>
            </div>
            <span className="absolute bottom-10 left-2 bg-blue-500 text-white text-sm px-1 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/md-zubaer-hossain-04935b102/"
            className="relative group"
          >
            <div className="h-10 w-10 bg-blue-200 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <svg className="h-6 w-6 text-2xl text-blue-700">
                <FaLinkedin></FaLinkedin>
              </svg>
            </div>
            <span className="absolute left-10 bottom-0 bg-blue-500 text-white text-sm px-1 py-1  rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm text-center">
          &copy;ZubaerJewel @2023 All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
