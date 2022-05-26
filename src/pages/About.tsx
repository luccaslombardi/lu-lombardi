import CodingGif from "../assets/coding.gif";

export function About() {
  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center w-auto pb-24">
      <div className="h-24 w-[2px] bg-gradient-to-b from-[#2d51bd] mb-10" />
      <h1 className="text-5xl uppercase font-bold pb-4">Sobre mim</h1>
      <div className="m-auto flex w-4/5 max-w-6xl justify-center items-center">
        <div className=" w-3/5">
          <h3>Sou Luccas,</h3>
          <p className="px-8 text-base text-left">
            Sou formado em Ciência da Computação pela Universidade São Judas
            Tadeu. Atuo como desenvolvedor Frontend em busca de me tornar Full
            Stack.
          </p>
          <p className="px-8 text-base text-left">
            Faço parte do mundo da programação há 6 anos. Uma das melhores
            sensações para mim é ver algo ser construído do zero, passo a passo
            ver algo tomando forma. Por isso um dos meus principais hobbies é
            criar aplicações autônomas utilizando diferentes ferramentas e
            linguagens. Na minha jornada já passei por algumas linguagens como
            Java, Python e Swift mas me apeguei à Javascript e suas vertentes
            (React, Node, Typescript, HTML e CSS). Apaixonado por tecnologia e
            desenvolvimento de softwares, procuro novos desafios para
            desenvolver minhas habilidades, continuar evoluindo e adquirindo
            experiência da área de TI. Meu objetivo é poder fazer parte de uma
            empresa na qual eu possa aprender, ensinar e evoluir junto de todos,
            não só no aspecto profissional e técnico, mas também pessoal e em
            como agregar e somar no trabalho em equipe.
          </p>
        </div>
        <div className=" w-2/5">
          <img src={CodingGif} alt="Coding" />
        </div>
      </div>
    </div>
  );
}
