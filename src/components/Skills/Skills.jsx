
import { useState } from 'react';
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
// import gitHub from '../../assets/28189-github-octocat (1).json'
const Skills = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <div className="md:mt-20" id="skills">
      <div className="text-center mb-12">
        <h1 className="font-semibold text-4xl md:mt-5 dark:text-[#8892B0]">
          Skills
        </h1>
        <p className="text-2xl my-12 dark:text-[#abc1ff]">
          I Work Hard to Improve My Skills Regularly.
        </p>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="mt-10 md:mx-1 space-y-10">
          {/* row-1 */}
          <div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            data-aos="fade-up"
          >
            <div className="flex items-center  md:w-72 h-16 py-10 pl-3 sm:w-full rounded-full bg-[#184630]">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-3  rounded-full object-cover"
                  src="https://i.ibb.co/yqQPSvb/download-5.jpg"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-white text-lg">80%</h2>
                <p className="text-[#8da7ee] text-lg mt-1">HTML5 & CSS3</p>
              </div>
            </div>
            <div className="flex items-center md:w-72 h-16 py-10 pl-3 sm:w-full rounded-full  bg-[#2e394e]">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-3  rounded-full object-cover"
                  src="https://i.ibb.co/sKGqtVS/download-2.png"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={70} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">JavaScript</p>
              </div>
            </div>
            <div className="flex items-center md:w-72 sm:w-full h-16 py-10 pl-3 rounded-full bg-[#184630]">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-4  rounded-full object-cover"
                  src="https://i.ibb.co/5jt7fY1/download.png"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={80} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">React JS</p>
              </div>
            </div>
            {/* <div className="flex items-center w-72 h-16 py-10 pl-3 rounded-full bg-[#184630]">
          <div className="relative ">
            <img
              className="h-16 w-16 bg-white p-4  rounded-full object-cover"
              src="https://cdn-icons-png.flaticon.com/512/919/919827.png?w=740&t=st=1687779213~exp=1687779813~hmac=0d4b2d7dac008f33897f94650b8d9298a7110b26468252a70deb4f7df145fcdb"
              alt="Avatar"
            />
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
          </div>
          <div className="ml-4">
            <h2 className="font-bold text-white text-lg">60%</h2>
            <p className="text-[#8da7ee] text-lg mt-1">HTML5</p>
          </div>
        </div> */}

            <div className="flex items-center sm:w-full md:w-72 h-16 py-10 pl-3 rounded-full bg-[#184630]">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-4  rounded-full object-cover"
                  src="https://i.ibb.co/m4FPjBT/download-3.png"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={50} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">Express JS</p>
              </div>
            </div>
          </div>
          {/* row-2 */}
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-40 gap-12"
          >
            <div className="flex items-center md:w-72 sm:w-full h-16 py-10 pl-3 rounded-full bg-[#2e394e] ">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-4  rounded-full object-cover"
                  src="https://i.ibb.co/R2ztmD1/download-2.jpg"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={80} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">BootStrap</p>
              </div>
            </div>

            <div className="flex items-center animate-bounce sm:w-full md:w-72 h-16 py-10 pl-3 rounded-full bg-[#184630] ">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-2  rounded-full object-cover"
                  src="https://i.ibb.co/8r5rJxC/download-4.png"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={50} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">MongoDB</p>
              </div>
            </div>

            <div className="flex items-center md:w-[700px] lg:w-72 h-16 py-10 pl-3 rounded-full bg-[#2e394e]  ">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-3 rounded-full object-cover"
                  src="https://i.ibb.co/NTy0LTX/download-1.jpg"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={80} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">Tailwind CSS</p>
              </div>
            </div>

            {/* <div className="flex items-center sm:w-full md:w-72 h-16 py-10 pl-3 rounded-full bg-[#2e394e]">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-4  rounded-full object-cover"
                  src="https://i.ibb.co/Yp3NyHm/download-5.png"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={40} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">NodeJS</p>
              </div>
            </div> */}
          </div>
          {/* row-3 */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:mx-72 gap-5">
            <div className="flex items-center sm:w-full md:w-72 h-16 py-10 pl-3 rounded-full bg-[#184630]">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-4  rounded-full object-cover"
                  src="https://i.ibb.co/bzzJCTN/download-6.png"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={70} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">Git $ GitHub</p>
              </div>
            </div>
            <div className="flex items-center sm:w-full md:w-72 h-16  py-10 pl-3 rounded-full bg-[#2e394e]">
              <div className="relative ">
                <img
                  className="h-16 w-16 bg-white p-3  rounded-full object-cover"
                  src="https://i.ibb.co/Pm7XNvK/download.jpg"
                  alt="Avatar"
                />
                <div className="absolute inset-0 rounded-full shadow-inner"></div>
              </div>
              <div className="ml-4">
                {counterOn && (
                  <h2 className="font-bold text-white text-lg">
                    <CountUp start={0} end={80} duration={5} delay={0} />%
                  </h2>
                )}
                <p className="text-[#8da7ee] text-lg mt-1">Firebase</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className=" border-[#6026c4] border-[1px]  py-[16px] rounded-lg px-16 my-8 dark:text-[#729CB8] font-bold ">
            See All Skills
          </button>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Skills;
