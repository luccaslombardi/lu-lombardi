import { AiFillGithub } from 'react-icons/ai';

export function Header() {
  return (
    <header className=" h-24 w-screen flex absolute justify-between flex-wrap items-center px-64 z-50">
      <div className="">
        <p>LOGOTIPO</p>
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
    </header>
  );
}
