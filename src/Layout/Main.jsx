import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    // dark:bg-black dark:text-white
    <div className="dark:bg-[#0F172A] dark:text-white text-black">
      <Navbar></Navbar>
      <div className="dark:pl-6 dark:pr-8 pl-6 pr-8">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;