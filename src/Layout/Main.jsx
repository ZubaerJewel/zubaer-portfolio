import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    // dark:bg-black dark:text-white
    <div className=" text-black bg-gradient-to-r 
    from-[#62d118] to-purple-800 font-serif">
      <Navbar></Navbar>
      <div className="mx-20 dark:bg-[#0F172A] dark:text-white dark:pl-6 dark:pr-8 pl-6 pr-8">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;