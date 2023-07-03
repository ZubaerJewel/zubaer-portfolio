/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FaFileDownload, FaMoon, FaSun } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // const toggleProfileModal = () => {
  //   setIsProfileOpen(!isProfileOpen);
  // };



const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };



  return (
    <nav className="dark:bg-[#0F172A] bg-gray-50 bg-gradient-to-r 
    from-[#62d118] to-purple-800 shadow-white dark:text-[#8da7ee] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between dark:border-b-blue-100 border-[1px] border-t-0 border-l-0 border-r-0 h-16">
          <div className="flex items-center">
            <HashLink to="#home" smooth>
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/fH4mhNq/Zubaer-Hossain300x350.jpg"
                alt=""
              />
            </HashLink>

            <p className="uppercase text-xl text-yellow-300 font-bold bg-gradient-to-r 
                from-[#62d118] to-purple-800 hover:from-blue-700">
              <span className="dark:from-purple-800 to-[#62d118]">Z</span>ubaer
              <span className="dark:from-purple-800 to-[#62d118]"> Hossain</span>
            </p>
          </div>
          <div className="hidden md:block flex-grow text-3xl">
            <div className="ml-10 flex text-yellow-300 font-semibold items-baseline space-x-2 lg:ml-64">
              <HashLink
                to="#home"
                smooth
                className=" hover:bg-gray-700 hover: px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </HashLink>
              <HashLink
                to="#about"
                smooth
                className=" hover:bg-gray-700 hover: px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </HashLink>

              <HashLink
                to="#skills"
                smooth
                className=" hover:bg-gray-700 hover: px-3 py-2 rounded-md text-lg font-medium"
              >
                Skills
              </HashLink>
              <HashLink
                to="#projects"
                smooth
                className=" hover:bg-gray-700 hover: px-3 py-2 rounded-md text-lg font-medium"
              >
                Projects
              </HashLink>

              <HashLink
                to="#contact"
                smooth
                className=" hover:bg-gray-700 hover: px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </HashLink>
            </div>
          </div>
          <div className="flex items-center">
            <a href="https://drive.google.com/file/d/1ILwym6on5wZpjswXn65mJ2s9lorqg-57/view?usp=drive_link" download>
              <button
                type="submit"
                className="text-yellow-200 text-sm uppercase bg-gradient-to-r 
                from-[#62d118] to-purple-800 hover:from-blue-700 flex 
                justify-center items-center gap-1  rounded-md px-4 py-2 ml-2 focus:outline-none
                 hover:bg-gray-600"
              >
                Download Resume
                <span>
                  <FaFileDownload></FaFileDownload>
                </span>
              </button>
            </a>
            {/* </form> */}
            <div className="ml-4 flex items-center gap-3">
              

              <div onClick={handleTheme}>
                {theme === "dark" ? (
                  <FaMoon
                    className="transform scale-x-[-1] bg-gray-800 text-white rounded-full p-2"
                    size={32}
                  />
                ) : (
                  <FaSun
                    className="bg-gray-500 text-amber-400 rounded-full p-2"
                    size={32}
                  />
                )}
              </div>
              
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <HashLink
              to="#home"
              smooth
              className=" hover:bg-gray-700 hover: px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </HashLink>
            <HashLink
              to="#about"
              smooth
              className=" hover:bg-gray-700 hover: block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </HashLink>
            <HashLink
              to="#skills"
              smooth
              className=" hover:bg-gray-700 hover: block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </HashLink>
            <HashLink
              to="#projects"
              smooth
              className=" hover:bg-gray-700 hover: block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </HashLink>
            <HashLink
              to="#contact"
              smooth
              className=" hover:bg-gray-700 hover: block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
