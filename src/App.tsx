
import { Widget } from "./components/Widget";
import { Introduction } from "./pages/Introduction";
import { About } from "./pages/About";
import { Languages } from "./pages/Languages";
import { Experiences } from "./pages/Experiences";

export function App() {
  return (
    <>
      <Introduction />
      <About />
      <Languages />
      <Experiences />
      <Widget />
    </>
  );
}
