import { useEffect } from "react";
import Header from "./Header";
import { ThemeProvider, useDarkMode } from "./ThemeContext";
import "../style/abstract/base.scss";
import "../style/abstract/styles.scss";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

const Main: React.FC = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <main>
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
