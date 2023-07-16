import { FiExternalLink } from "react-icons/fi";

const projects = {
  FINANCERY: {
    title: "Financery",
    description:
      "Financery é uma plataforma para controle financeiro pessoal, onde é possível adicionar receitas e despesas e o aap irá contabilizar os valores das entradas, saídas e o saldo atual.",
    technologies: "HTML, CSS, Javascript, NodeJS",
    isReponsive: "Sim",
    image: "bg-[url('assets/financery-screenshot.png')]",
    link: "https://financery.luccaslombardi.com.br  "
  },
  STANDUP: {
    title: "StandUp",
    description:
      "Com base no conceito de Pomodoro, Standup foi criado para otimizar a produtividade de quem o usa. À cada ciclo de 25 minutos o app vai gerar aleatoriamente um desafio (ex: estique os braços por 2 minutos) para que o usuário pare o que estiver fazendo e foque em descansar seu corpo e sua mente.",
    technologies: "HTML, CSS, Typescript, ReactJS, NextJS",
    isReponsive: "Não",
    image: "bg-[url('assets/standup-screenshot.png')]",
    link: "https://standup.luccaslombardi.com.br/"
  },
};

export function Projects() {
  return (
    <div className="flex flex-col justify-center items-center py-24" id="projects">
      <h1 className="text-center text-4xl md:text-5xl uppercase font-bold pb-20">
        Projetos
      </h1>
      <div className="grid grid-col-1 md:grid-cols-2 gap-16 w-4/5 md:w-3/5 max-w-6xl items-center">
        {Object.entries(projects).map(([key, value]) => {
          return (
            <div
              key={key}
              className={`group ${value.image} bg-cover bg-center bg-no-repeat h-96 rounded-lg`}
            >
              <div className="flex flex-col justify-between items-left p-5 md:p-10 h-full w-full backdrop-brightness-50 hover:backdrop-blur-lg rounded-lg transition ease-linear text-[1px]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-6 text-0 ">
                    <h1 className="invisible group-hover:visible group-hover:text-3xl transition-all duration-200 font-bold uppercase">
                      {value.title}
                    </h1>
                    <a
                      href={value.link}
                      target="_blank"
                      className="flex group items-center uppercase gap-2 invisible group-hover:visible group-hover:text-sm py-1 px-2 rounded bg-gradient-to-r from-violet-800 to-purple-800 hover:from-violet-700 hover:to-purple-800"
                    >
                      acesse
                      <FiExternalLink />
                    </a>
                  </div>
                  <div className="invisible group-hover:visible h-[3px] w-1/12 bg-[#06b755] rounded-lg" />
                </div>
               

                <p className="invisible group-hover:visible group-hover:text-sm md:group-hover:text-base transition-all duration-200 text-justify">
                  {value.description}
                </p>
                <p className="invisible group-hover:visible group-hover:text-sm md:group-hover:text-base transition-all duration-200">
                  <strong>Tecnologias usadas:</strong> {value.technologies}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
