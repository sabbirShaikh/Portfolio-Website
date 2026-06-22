import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
        <Header />
        <Home />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
    </>
  );
}
