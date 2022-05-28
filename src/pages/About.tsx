import CodingGif from "../assets/coding.gif";

export function About() {
  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center w-auto pb-24">
      <div className="h-24 w-[2px] bg-gradient-to-b items-center from-[#2d51bd] mb-10" id="about" />

      <h1 className="w-3/5 text-4xl md:text-5xl uppercase font-bold" >Sobre mim</h1>

      <div className="m-auto flex flex-col md:flex-row w-full px-4 md:px-0 md:w-4/5 max-w-6xl justify-center md:justify-between text-center md:text-left items-center">
        <div className="px-8 md:pl-10 md:pr-20 md:w-3/5 text-base md:text-left font-light">
          <h3 className="pt-10 md:pt-0 font-bold text-2xl md:text-4xl mb-4 pb-4 mr-4 border-b-[1px] border-zinc-700">Prazer, sou o Luccas!</h3>
          <p className="text-justify md:text-left">
            Formado em Ciência da Computação pela Universidade São Judas
            Tadeu, atuo como desenvolvedor Frontend em busca de me tornar Full
            Stack.
          </p>
          <p className="text-justify md:text-left">
            Faço parte do mundo da programação há 6 anos. Uma das melhores
            sensações é ver algo sendo construído do zero e passo a passo
            tomar forma.
          </p>
          <p className="text-justify md:text-left">
            Por isso um dos meus principais hobbies é
            criar aplicações autônomas utilizando diferentes ferramentas e
            linguagens.
          </p>
          <p className="text-justify md:text-left">
            Na minha jornada já passei por algumas linguagens como
            Java, Python e Swift mas me apeguei à Javascript e seu ecossistema
            (React, Node, Typescript, HTML e CSS).
          </p>
        </div>
        <div className="w-4/5 md:w-2/5">
          <img src={CodingGif} alt="Coding" className="w-auto h-auto" />
        </div>
      </div>
    </div>
  );
}
