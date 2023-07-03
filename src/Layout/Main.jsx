import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Cursor from "../components/Cursor/Cursor";
const Main = () => {
  return (
    // dark:bg-black dark:text-white
    <div className=" text-black bg-gradient-to-r 
    from-[#62d118] to-purple-500 font-serif">
      <Navbar></Navbar>
      <div className="shadow-lg shadow-white mx-20 dark:bg-[#0F172A] dark:text-white dark:pl-6 dark:pr-8 pl-6 pr-8">
        <Outlet></Outlet>
      </div><Cursor></Cursor>
      <Footer /> 
    </div>
  );
};

export default Main;