import { BsGithub, BsInstagram, BsLinkedin, BsSpotify } from "react-icons/bs";

export const socialMedia = {
  INSTAGRAM:{
    img: <BsInstagram />,
    link: "https://instagram.com/luccas_lombardi"
  },
  LINKEDIN:{
    img: <BsLinkedin />,
    link: "https://linkedin.com/in/luccas-lombardi"
  },
  GITHUB:{
    img: <BsGithub />,
    link: "https://github.com/luccaslombardi"
  },
  SPOTIFY:{
    img: <BsSpotify />,
    link: "https://open.spotify.com/user/22e533ad6qd7zck44ydhf2omi?si=96762ccd294445c0"
  },
}

export function Introduction() {
  return (
    <div className="flex h-screen w-screen justify-center bg-[url('assets/background-image.png')] bg-cover">
    <div className="container w-auto flex flex-col m-auto items-center drop-shadow-lg gap-3">
      <div className=" bg-[#364865] bg-opacity-40 flex flex-col text-center items-center rounded-full p-8 z-10 drop-shadow-2xl">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFYGCyOL7EDIw/profile-displayphoto-shrink_200_200/0/1642860856006?e=1658361600&v=beta&t=WjupcXbihaal7RIAdEap-_KCciQjVlqCu3cm8oJSzD4"
          alt="Luccas Lombardi"
          className="rounded-full lg:border-[20px] border-[#344c70] lg:w-[250px] md:w-[250px] md:border-[15px] " />
      </div>
      <div className="lg:w-96 bg-[#1E293B] flex flex-col text-center items-center rounded-2xl pt-48 pb-8 px-8 mt-[-12rem] md:w-[21rem]">
        <span className="text-[#04D361] text-sm pb-1 ">HELLO WORLD!</span>
        <h1 className="lg:text-3xl md:text-2xl">LUCCAS LOMBARDI</h1>
        <h3 className="lg:text-lg md:text-base font-extralight">Desenvolvedor Frontend</h3>
        <div className="flex justify-between text-center items-center gap-8 m-auto py-5">
          {Object.entries(socialMedia).map(([key, value])=> {
            return(
              <a key={key} href={value.link} title={key} target="blank" className="hover:mt-[-3px] hover:mb-[3px] ease-in-out duration-200 text-3xl">{value.img}</a>
            )
          })}
        </div>
      </div>
    </div>
    </div>
  );
}
