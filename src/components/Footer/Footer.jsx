import {
  FaFacebookF,
  FaInstagram,

  FaGithub,

  // FaGithubSquare,
  // FaLinkedin,
  // FaSnapchat,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-[#280742] to-slate-900 border-t-[#406b4c] border-t-[1px]  pt-12 pb-8 px-4 md:px-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 text-left">
          {/* <img
            className="w-56 h-40"
            src="https://i.ibb.co/PWkVHyy/2411-removebg-preview.png"
            alt=""
          /> */}

          <h1 className="text-white font-bold text-2xl ml-9">Yeasins</h1>
          <h1 className="text-white font-bold text-xl ml-9">
            MERN Stack Developer
          </h1>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Navigation</h2>
          <ul className="text-gray-400 text-sm leading-loose">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/projects">Project</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm leading-loose">
            123 Main St.
            <br />
            Brahmanbaria, Bangladesh
            <br />
            +880 1927-048579
            <br />
            yeasin51570@gmail.com
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100068116817527"
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

          <a href="https://github.com/yeasin550" className="relative group">
            <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
              <svg className="h-6 w-6 text-2xl text-white">
                <FaGithub></FaGithub>
              </svg>
            </div>
            <span className="absolute bottom-10 left-2 bg-white text-black text-sm px-1 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Git $ GitHub
            </span>
          </a>

          <a
            href="https://www.instagram.com/_y_e_a__s_i_n_/"
            className="relative group"
          >
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <svg className="h-6 w-6 text-2xl text-red-700">
                <FaInstagram></FaInstagram>
              </svg>
            </div>
            <span className="absolute left-10 bottom-0 bg-white text-black text-sm px-1 py-1  rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Instagram
            </span>
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm text-center">
          &copy; 2023 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
