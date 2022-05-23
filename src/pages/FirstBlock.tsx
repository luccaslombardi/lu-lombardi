import { BsArrowDownShort, BsGithub, BsInstagram, BsLinkedin, BsSpotify } from "react-icons/bs";

export function FirstBlock() {
  return (
    <div className="container w-auto flex flex-col m-auto items-center drop-shadow-lg gap-3">
      <div className="-backdrop bg-violet-900 bg-opacity-40 flex flex-col text-center items-center rounded-full p-8 z-10 drop-shadow-2xl">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFYGCyOL7EDIw/profile-displayphoto-shrink_200_200/0/1642860856006?e=1658361600&v=beta&t=WjupcXbihaal7RIAdEap-_KCciQjVlqCu3cm8oJSzD4"
          alt="Luccas Lombardi"
          className="rounded-full lg:border-[20px] border-violet-800 lg:w-[300px] md:w-[250px] md:border-[15px] " />
      </div>
      <div className="lg:w-96 bg-[#2f1456] flex flex-col text-center items-center rounded-2xl pt-48 pb-8 px-8 mt-[-12rem] md:w-[21rem]">
          <span className="text-[#04D361] text-sm pb-1">HELLO WORLD!</span>
        <h1 className="lg:text-3xl md:text-2xl">LUCCAS LOMBARDI</h1>
        <h3 className="lg:text-lg md:text-base">Desenvolvedor Frontend</h3>
        <div className="flex justify-between text-center items-center gap-8 m-auto py-5">
          <a href="https://instagram.com/luccas_lombardi" target="blank" className="hover:mt-[-3px] hover:mb-[3px] ease-in-out duration-200"><BsInstagram size={30} /></a>
          <a href="https://linkedin.com/in/luccas-lombardi" target="blank" className="hover:mt-[-3px] hover:mb-[3px] ease-in-out duration-200"><BsLinkedin size={30} /></a>
          <a href="https://github.com/luccaslombardi" target="blank" className="hover:mt-[-3px] hover:mb-[3px] ease-in-out duration-200"><BsGithub size={30} /></a>
          <a href="https://open.spotify.com/user/22e533ad6qd7zck44ydhf2omi?si=96762ccd294445c0" target="blank" className="hover:mt-[-3px] hover:mb-[3px] ease-in-out duration-200"><BsSpotify size={30} /></a>
        </div>
      </div>
    </div>
  );
}
