import logo from "../assets/logo.png"
import { AiFillGithub } from 'react-icons/ai';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export function Header() {
  return (
    <header className="h-24 w-screen flex absolute justify-center items-center z-50" id="top">
      <div className="flex justify-between flex-wrap items-center w-4/5 max-w-7xl md:px-8 ">
        <div className="">
          <img src={logo} alt="Luccas Lombardi" className="w-16" />
        </div>

        <div className="md:flex hidden">
          <ul className="px-4">
            <li className="inline px-4"><AnchorLink href='#about' className="hover:text-violet-300">Quem eu sou</AnchorLink></li>
            <li className="inline px-4"><AnchorLink href='#languages' className="hover:text-violet-300">Linguagens</AnchorLink></li>
            <li className="inline px-4"><AnchorLink href='#experiences' className="hover:text-violet-300">Experiências</AnchorLink></li>
            <li className="inline px-4"><AnchorLink href='#contact' className="hover:text-violet-300">Contato</AnchorLink></li>
          </ul>
          <a href="https://github.com/luccaslombardi/lu-lombardi" target="_blank" title="Projeto no Github" className="text-violet-700 hover:text-violet-500 transition-all duration-200">
            <AiFillGithub size={25} />
          </a>
        </div>

        <div className="flex md:hidden">
          <a href="https://github.com/luccaslombardi/lu-lombardi" target="_blank" className="text-violet-700 hover:text-violet-500 transition-all duration-200">
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
    </header>
  );
}

