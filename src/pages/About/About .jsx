/* eslint-disable react/no-unescaped-entities */

import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="py-12 items-center" id="about">
      <h1 className="text-3xl font-semibold text-center py-20 dark:text-[#8892B0]">
        About Me 
      </h1>

      <div className="  mx-auto">
        <div className=" md:flex-row md:pr-8">
          <div className="relative  justify-center items-center md:w-1/2 py-12">
            <img
              src="https://i.ibb.co/fH4mhNq/Zubaer-Hossain300x350.jpg"
              className="rounded-full h-80 w-80"
            />
            <a
              href="https://www.facebook.com/profile.php?id=100068116817527"
              className="absolute text-2xl dark:text-white dark:bg-black bg-white rounded-full text-sky-600 -mb-72 -ml-36 hover:text-4xl duration-300"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a className="absolute text-2xl text-black rounded-full dark:bg-white -mb-80 hover:text-4xl duration-300">
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.instagram.com/_y_e_a__s_i_n_/"
              className="absolute text-2xl text-red-600 bg-black  rounded-full -mb-72 -mr-36 hover:text-4xl duration-300"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
          <div className="md:w-1/2 text-center md:pl-10">
            <p className="text-lg mb-4 text-justify">
              Hi, I am Zubaer Hossain. I'm a passionate web developer with a keen
              eye for detail, and a drive to create elegant, efficient, and
              user-friendly web app.I've honed my skills in a variety of
              technologies, including ReactJs, Nodejs,ExpressJs,Firebase,
              Javascript es6+ and MongoDb. Now I am learning NextJs.
            </p>
            <div className="mb-4 md:flex justify-around gap-5">
              <div className="mb-2 md:w-1/2 h-48 p-4  border-[2px] border-[#3a1775]">
                <h1 className="text-lg font-semibold">Name</h1>
                <p className="dark:text-[#8892B0]">Zubaer Hossain</p>
                <h1 className="text-lg font-semibold">Email</h1>
                <p className="dark:text-[#8892B0]">zubaer5jewel.16@gmail.com</p>
                <h1 className="text-lg font-semibold">Phone</h1>
                <p className="dark:text-[#8892B0]">+8801839-666712</p>
              </div>
              <div className="mb-2 md:w-1/2 p-4 h-48 border-[2px] border-[#3a1775]">
                <h1 className="text-lg font-semibold">Address</h1>
                <p className="dark:text-[#8892B0]">Jashore, Bangladesh</p>
                <h1 className="text-lg font-semibold">B.Sc in CSE</h1>
                <p className="dark:text-[#8892B0]">
                  
                </p>
                <h1 className="text-lg font-semibold">Freelance</h1>
                <p className="dark:text-[#8892B0]">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What i do */}
      <h1 className="text-center font-semibold -mt-16 opacity-30 text-6xl dark:text-[#8892B0]">
        What I do?
      </h1>
      {/* <div className="md:flex justify-evenly my-12"> */}
        {/* option - 1 */}
        {/* <div>
          <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
               <img src="https://i.ibb.co/2tf1tmG/1.png" alt="" />
            </span>
            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                    online.</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>

        </div> */}
        {/* option - 1 */}
        {/* <div>2</div> */}
        {/* option - 1 */}
        {/* <div>3</div> */}
      {/* </div> */}
    </div>
  );
};

export default About;
