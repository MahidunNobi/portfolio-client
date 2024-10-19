import "./App.css";
import Experience from "./componants/Experience/Experience";
import Hero from "./componants/Hero/Hero";
import LetsTalk from "./componants/LetsTalk/LetsTalk";
import Projects from "./componants/Projects/Projects";
import Skills from "./componants/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <LetsTalk />
    </>
  );
}

export default App;
