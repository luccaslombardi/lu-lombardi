import USJTLogo from "../assets/usjt-logo.svg"
import RocketseatLogo from "../assets/rocketseat-logo.svg"
import AluraLogo from "../assets/alura-logo.svg"
import DevSuperiorLogo from "../assets/devsuperior-logo.svg"

const courses = {
    USJT: {
        title: "USJT",
        img: USJTLogo,
        style: "h-15 ml-[-25px]",
        description: "Foi onde construí minha base e conceito sobre o mundo da tecnologia. Lá passei por diversos conceitos como Programação Orientada à Objetos (JAVA), Análise de Dados (Python), Desenvolvimento Web (HTML + CSS + JS), Desenvolvimento de Jogos (Unity), Desenvolvimento Ágil (SCRUM), entre outros."
    },
    ROCKETSEAT: {
        title: "Rocketseat",
        img: RocketseatLogo,
        style: "h-10",
        description: "Após a faculdade, descobri minha paixão por React e Node. Participei de diversos eventos realizados pela Rocketseat. Nela pude concretizar meus conhecimentos sobre essas ferramentas e aprender e focar em soft skills, padronização de projetos, clean code e muito mais."
    },
    ALURA: {
        title: "Alura",
        img: AluraLogo,
        style: "h-10",
        description: "Alura foi uma grande aliada quando decidi começar a fazer alguns projetos autônomos. Durante alguns projetos me deparei com algumas dificuldades técnicas e quase sempre era suprido por materiais de lá. Além de participar de alguns eventos realizados por eles."
    },
    DEVSUPERIOR: {
        title: "Dev Superior",
        img: DevSuperiorLogo,
        style: "h-8",
        description: "Em busca de sempre alcançar o próximo nível, procurei os eventos do Devsuperior para realizar projetos com React + Spring Boot em busca da versatilidade e aprimorar a lógica de programação."
    }
}

export function Study() {
    return (
        <div className="flex flex-col justify-center items-center pb-16">

            <h1 className="text-center text-4xl md:text-5xl uppercase font-bold pb-20">quem me ajudou</h1>


            <div className="grid grid-col-1 md:grid-cols-2 gap-16 w-4/5 md:w-3/5 max-w-6xl items-center">
                {Object.entries(courses).map(([key, value]) => {
                    return (
                        <div key={key} className="flex items-center p-5 md:p-10 h-[18rem] align-middle border-zinc-700 border-[1px] rounded-lg bg-violet-800 bg-opacity-5">
                            <div className="flex flex-col gap-5 items-start">
                                <img src={value.img} alt={value.title} className={value.style} />
                                <div className="h-[3px] w-1/12 bg-[#04D361]" />
                                <p className="text-sm font-light text-justify">{value.description}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}