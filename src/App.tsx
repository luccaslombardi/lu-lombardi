import { BsArrowDownShort } from "react-icons/bs";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { FirstBlock } from "./pages/FirstBlock";
import { SecondBlock } from "./pages/SecondBlock";

export function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen w-screen bg-opacity-20 bg-indigo-900 justify-center backdrop-blur-sm backdrop-brightness-50">
        <FirstBlock />
        <div className="absolute bottom-8 rounded-full border-2 text-4xl border-slate-300 mt-3 animate-bounce text-slate-300 hover:border-[#04D361] hover:text-[#04D361] transition-colors">
          <a href="#secondBlock">
            <BsArrowDownShort />
          </a>
        </div>
      </div>
      <div id="secondBlock">
        <SecondBlock />
      </div>

      <Widget />
    </>
  );
}
