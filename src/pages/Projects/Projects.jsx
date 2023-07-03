import { FaEye, FaGithub } from "react-icons/fa";
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
const Projects = () => {
    return (
      <div id="projects" className="my-5">
        <h1 className="text-center font-semibold text-4xl my-10 dark:text-[#abc1ff]">
          My Project
        </h1>
        {/* project section  */}

        <div className="flex min-h-screen items-center justify-center">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={project1}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute w-auto inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl font-bold text-white">
                  eating-well
                </h1>
                <p className="mb-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className=" font-semibold">Technology used</p>
                  HTML, CSS, Tailwind, JavaScript, React, Node.js, MongoDB,
                  Express.js, Firebase
                </p>

                <div className="flex items-center gap-3">
                  <a href="https://github.com/ZubaerJewel/eating-well-client">
                    <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#391263] to-yellow-600 hover:to-blue-500  justify-center focus:outline-none hover:bg-gray-600">
                      <span>
                        <FaGithub></FaGithub>
                      </span>
                      GitHub
                    </button>
                  </a>
                  <a href="https://github.com/ZubaerJewel/eating-well-client">
                    <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#391263] to-yellow-600 hover:to-blue-500  justify-center focus:outline-none hover:bg-gray-600">
                      <span>
                        <FaGithub></FaGithub>
                      </span>
                      GitHub
                    </button>
                  </a>
                  <a href="https://eatingwell-1532f.web.app/">
                    <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                      <span>
                        <FaEye></FaEye>
                      </span>
                      Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl font-bold text-white">
                Educational Toys
                </h1>
                <p className="mb-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className=" font-semibold">Technology used</p>
                  HTML, CSS, Tailwind, JavaScript, React, Node.js, MongoDB,
                  Express.js, Firebase
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/ZubaerJewel/toy-shop/tree/main">
                    <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#391263] to-yellow-600 hover:to-blue-500  justify-center focus:outline-none hover:bg-gray-600">
                      <span>
                        <FaGithub></FaGithub>
                      </span>
                      GitHub
                    </button>
                  </a>
                  <a href="https://toy-shop-2730e.firebaseapp.com/">
                    <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                      <span>
                        <FaEye></FaEye>
                      </span>
                      Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={project3}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center  text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl font-bold text-white">
                  Inner Engineering
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-semibold">Technology used:</p>
                  HTML, CSS, Tailwind, JavaScript, React, Node.js, MongoDB,
                  Express.js, Firebase, Stripe, JWT, React Query, React Hook
                  Form
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/ZubaerJewel/Yoga-Meditation-Client">
                    <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#391263] to-yellow-600 hover:to-blue-500  justify-center focus:outline-none hover:bg-gray-600">
                      <span>
                        <FaGithub></FaGithub>
                      </span>
                      GitHub
                    </button>
                  </a>
                  <a href="https://github.com/ZubaerJewel/Yoga-Meditation-Client">
                    <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#391263] to-yellow-600 hover:to-blue-500  justify-center focus:outline-none hover:bg-gray-600">
                      <span>
                        <FaGithub></FaGithub>
                      </span>
                      GitHub
                    </button>
                  </a>
                  <a href=" https://yoga-meditation-f2f5a.web.app/">
                    <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                      <span>
                        <FaEye></FaEye>
                      </span>
                      Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    );
};

export default Projects;