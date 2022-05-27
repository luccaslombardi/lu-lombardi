import CodingGif from "../assets/coding.gif";

export function About() {
  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center w-auto pb-24">
      <div className="h-24 w-[2px] bg-gradient-to-b from-[#2d51bd] mb-10" />
      
      <h1 className=" w-3/5 text-5xl uppercase font-bold">Sobre mim</h1>

      <div className="m-auto flex  w-4/5 max-w-6xl justify-between text-left items-center ">
        <div className="pl-10 pr-20 w-3/5 text-base text-left font-light">
          <h3 className="font-bold text-4xl mb-4 pb-4 mr-4 border-b-[1px] border-zinc-700">Prazer, sou o Luccas!</h3>
          <p>
            Formado em Ciência da Computação pela Universidade São Judas
            Tadeu, atuo como desenvolvedor Frontend em busca de me tornar Full
            Stack.
          </p>
          <p>
            Faço parte do mundo da programação há 6 anos. Uma das melhores
            sensações é ver algo sendo construído do zero e passo a passo
            tomar forma. 
          </p>
          <p>
            Por isso um dos meus principais hobbies é
            criar aplicações autônomas utilizando diferentes ferramentas e
            linguagens.
          </p>
          <p>
            Na minha jornada já passei por algumas linguagens como
            Java, Python e Swift mas me apeguei à Javascript e seu ecossistema  
            (React, Node, Typescript, HTML e CSS).
          </p>
        </div>
        <div className=" w-2/5">
          <img src={CodingGif} alt="Coding" className="w-auto h-auto" />
        </div>
      </div>
    </div>
  );
}
