
import { Widget } from "./components/Widget";
import { Introduction } from "./pages/Introduction";
import { About } from "./pages/About";
import { Languages } from "./pages/Languages";
import { Experiences } from "./pages/Experiences";
import { Study } from "./pages/Study";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

export function App() {
  return (
    <>
      <Introduction />
      <About />
      <Languages />
      <Experiences />
      <Projects />
      <Study />
      <Contact />
      <Widget />
    </>
  );
}
