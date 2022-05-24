import { SiCss3, SiHtml5, SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";

const languages = {
  HTML: {
    title: "HTML",
    image: <SiHtml5 />,
  },
  CSS: {
    title: "CSS",
    image: <SiCss3 />,
  },
  Javascript: {
    title: "Javascipt",
    image: <SiJavascript />,
  },
  React: {
    title: "React",
    image: <SiReact />,
  },
  Node: {
    title:"Node",
    image: <SiNodedotjs />
  }
};

export function SecondBlock() {
  return (
    <div className="flex flex-col gap-4 text-center items-center h-screen w-auto bg-slate-900  backdrop-blur-sm backdrop-brightness-50">
        <div className="h-24 w-[2px] mb-8 bg-gradient-to-b from-[#2d51bd] " />
      <div className="m-auto w-3/5 max-w-7xl px-10 ">
          <h3 className="text-5xl pb-8 uppercase font-bold border-b-[1px] mb-8 border-zinc-700">
            Quem Sou
          </h3>
          <div className="flex pb-4 justify-center">
            <div className="h-[5px] w-20 bg-[#04D361] mt-[-35px]"></div>
          </div>
          <p className="px-8 text-lg">
            Apaixonado por tecnologia e desenvolvimento de softwares, procuro
            novos desafios para desenvolver minhas habilidades, continuar
            evoluindo e adquirindo experiência da área de TI. Meu objetivo é
            poder fazer parte de uma empresa na qual eu possa aprender, ensinar
            e evoluir junto de todos, não só no aspecto profissional e técnico,
            mas também pessoal e em como agregar e somar no trabalho em equipe.
          </p>
          <div className="m-auto w-4/5 grid grid-cols-3 gap-14 py-10">
            {Object.entries(languages).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className="flex items-center group px-10 h-28 justify-self-center bg-[#233146] justify-center text-5xl rounded-lg hover:cursor-pointer"
                >
                  {value.image}
                  <span className="max-w-0 text-3xl overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    {value.title}
                  </span>
                </div>
              );
            })}
          </div>

      </div>
    </div>
  );
}
