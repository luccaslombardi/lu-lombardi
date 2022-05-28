import { socialMedia } from "../pages/Introduction";
import { BiUpArrow } from "react-icons/bi";

export function Footer() {
  return (
    <footer className="flex w-screen h-28 border-t-[1px] border-zinc-800 items-center justify-center">
      <div className="flex justify-between w-3/5 max-w-6xl px-8">
        <div className="flex justify-between w-56">
          {Object.entries(socialMedia).map(([key, value]) => {
            return (
              <a key={key} href={value.link} target="blank" title={key}>
                <div key={key} className="p-3 text-2xl  text-slate-400 bg-zinc-800 bg-opacity-80 rounded-md hover:bg-[#2b305b] hover:bg-opacity-100 hover:text-white transition-all duration-200">
                  {value.img}
                </div>
              </a>
            );
          })}
        </div>
        <div className="flex w-auto items-center font-light text-zinc-400 text-sm">
          <span className="inline-block align-text-middle">
            <span className="pr-1"> Powered by</span>
            <a
              className="underline"
              href="https://github.com/luccaslombardi"
              target="blank"
            >
              Luccas Lombardi
            </a>
          </span>
        </div>
        <a href="#" title="Voltar ao topo">
          <div className="text-2xl text-slate-400 p-3 bg-zinc-800 bg-opacity-70 rounded-md hover:bg-opacity-100 transition-all duration-200">
            <BiUpArrow />
          </div>
        </a>
      </div>
    </footer>
  );
}
