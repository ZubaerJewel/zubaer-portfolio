/* eslint-disable react/no-unknown-property */
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import contact from '../../assets/contact.png'
const Contact = () => {

  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_liy6ghd",
          "template_28czbk9",
          form.current,
          "rVGjQv_8CylX1hiCm"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };


  return (
    <div id="contact">
      <h1 className="text-3xl font-semibold text-center py-28 dark:text-[#abc1ff]">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 md:ml-5">
        <div className="text-center md:w-96" data-aos="zoom-in">
          <FaPhoneAlt className="flex mx-auto text-4xl bg-gray-500]  bg-[#0F172A] transform hover:-translate-y-3  border-2 w-16 h-16 rounded-full duration-500 text-indigo-500 border-[#6B44B9] hover:bg-[#254181] hover:text-white p-4"></FaPhoneAlt>

          <h2 className="text-2xl my-2 font-bold dark:text-[#abc1ff]">Phone</h2>
          <p className="my-3 dark:text-[#729CB8]">
            The phrasal sequence of the is now so that many campaign and benefit
          </p>
          <p className="dark:text-[#904dfc]">+8801839666712</p>
        </div>
        <div className="text-center md:w-96" data-aos="zoom-in">
          <FaEnvelope className="flex mx-auto  text-4xl bg-gray-500]  bg-[#0F172A] transform hover:-translate-y-3  border-2 w-16 h-16 rounded-full duration-500 text-indigo-500 border-[#6B44B9] hover:bg-[#254181] hover:text-white p-4"></FaEnvelope>
          <h2 className="text-2xl my-2 font-bold dark:text-[#abc1ff]">Email</h2>
          <p className="my-3  dark:text-[#729CB8]">
            The phrasal sequence of the is now so that many campaign and benefit
          </p>
          <p className="dark:text-[#904dfc]">zubaer5jewel.16@gmail.com</p>
        </div>
        <div className="text-center md:w-96" data-aos="zoom-in">
          <FaLocationArrow className="flex mx-auto  text-4xl bg-gray-500]  bg-[#0F172A] transform hover:-translate-y-3  border-2 w-16 h-16 rounded-full duration-500 text-indigo-500 border-[#6B44B9] hover:bg-[#254181]  hover:text-white p-4"></FaLocationArrow>
          <h2 className="text-2xl my-2 font-bold dark:text-[#abc1ff]">
            Location
          </h2>
          <p className="my-3 dark:text-[#729CB8]">
            The phrasal sequence of the is now so that many campaign and benefit
          </p>
          <p className="dark:text-[#904dfc]">Jashore, Bangladesh</p>
        </div>
      </div>

      {/* contact form */}
      <div className="md:flex justify-between mt-14 py-8">
        <div>
          <div
            className="content-box mb-5 w-full md:ml-16 p-3"
            data-aos="fade-up-right"
          >
            <h1 className="dark:text-[#8da7ee] my-3 font-semibold text-3xl">
              Get in touch !!
            </h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <div className="flex gap-4 ">
                <input
                  className="bg-transparent h-14 w-1/2 rounded border-[1px] border-[#3a1775] focus:ring-border-[#7C3AED] pl-4 dark:text-white placeholder-text-[#729CB8]"
                  type="text"
                  name="user_name"
                  placeholder="Name"
                />
                <input
                  className="bg-transparent h-14 w-1/2 rounded border-[1px] border-[#3a1775] pl-4 dark:text-white placeholder-text-[#729CB8]"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                />
                {/* <input
                  className="bg-transparent w-1/2 h-14 rounded border-[1px] border-[#3a1775] pl-4 dark:text-white placeholder-text-[#729CB8]"
                  type="text"
                  name="user_name"
                  readOnly="Last Name"
                /> */}
              </div>
              <div className="flex gap-4 pb-4">
                {/* <input
                  className="bg-transparent h-14 w-1/2 rounded border-[1px] border-[#3a1775] pl-4 dark:text-white placeholder-text-[#729CB8]"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                /> */}
                {/* <input
                  className="bg-transparent h-14 w-1/2 rounded border-[1px] border-[#3a1775] pl-4 dark:text-white placeholder-text-[#729CB8]"
                  type="phone"
                  name="user_phone"
                  placeholder="Phone"
                /> */}
              </div>
              <textarea
                className="bg-transparent rounded border-2 border-[#3a1775] dark:bg-[linear-gradient(90deg,#0F172A,#38095a);] h-36 pl-4 dark:text-white w-full placeholder-text-[#729CB8] pt-2"
                rows={40}
                cols={35}
                name="message"
                placeholder="Message"
              ></textarea>
              <button className=" border-[#44198f] shadow-white shadow-md border-[2px] w-full py-[16px] rounded-lg px-8 my-8 dark:text-[#729CB8] font-bold ">
                Send
              </button>
            </form>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img
            src="https://i.ibb.co/bm9Rj9r/Screenshot-2023-06-26-103646-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      {/* <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={contact} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
            <form action="" className="flex flex-col ">
              <div className="flex gap-4 py-2  ">
                <input
                  className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 "
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-4  py-4  ">
                <input
                  className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="phone"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                placeholder="Message"
              ></textarea>
              <button className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
