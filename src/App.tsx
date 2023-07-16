
import { Widget } from "./components/Widget";
import { Introduction } from "./pages/Introduction";
import { About } from "./pages/About";
import { Languages } from "./pages/Languages";
import { Experiences } from "./pages/Experiences";
import { ExperiencesMobile } from "./pages/ExperiencesMobile";
import { Study } from "./pages/Study";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";

export function App() {
  return (
    <>
      <Introduction />
      <About />
      <Languages />
      <div className="hidden lg:flex">
        <Experiences />
      </div>
      <div className="flex lg:hidden">
        <ExperiencesMobile />
      </div>
      <Projects />
      <Study />
      <Contact />
      <Widget />
    </>
  );
}
