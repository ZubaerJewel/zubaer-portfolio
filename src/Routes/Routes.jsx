import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About ";
// import MyProfile from "../components/MyProfile/MyProfile";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Skills from "../components/Skills/Skills";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
    ],
  },
]);
export default router;
