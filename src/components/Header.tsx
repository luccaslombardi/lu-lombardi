import logo from "../assets/logo-2.png"
import { AiFillGithub } from 'react-icons/ai';

export function Header() {
  return (
    <header className="h-24 w-screen flex absolute justify-center items-center z-50">
      <div className="flex justify-between flex-wrap items-center w-4/5 max-w-7xl px-8">
        <div className="">
          <img src={logo} alt="Luccas Lombardi" className="w-16" />
        </div>

        <div className="flex">
          <ul className="px-4">
            <li className="inline px-4">Quem eu sou</li>
            <li className="inline px-4">Blog</li>
            <li className="inline px-4">Contato</li>
          </ul>
          <button className="hover:opacity-80 transition-all duration-200">
            <AiFillGithub size={24} color="#8257E6" />
          </button>

        </div>
      </div>

    </header>
  );
}
