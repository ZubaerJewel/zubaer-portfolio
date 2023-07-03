
// import Cursor from "../../components/Cursor/Cursor";
import Skills from "../../components/Skills/Skills";
import About from "../About/About ";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Banner from "./Banner";


const Home = () => {
  return (
    <div className ="">
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      {/* <Cursor></Cursor> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
