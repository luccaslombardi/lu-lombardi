import CyanCodeGif from "../../assets/cyan-code.gif"

export function Tab3() {
  return (
    <div className="flex ">
      <div className="flex flex-col w-full md:w-3/5 py-10 px-3 text-center md:text-left">
        <h1 className="font-bold text-4xl md:text-5xl">
          Bradesco S.A.
        </h1>
        <ul className="flex justify-center md:justify-start  pb-10 pt-4 text-base divide-x divide-solid">
          <li className="pr-3">
            Estágio (Gestão e Desenvolvimento de Produtos)
          </li>
          <li className="pl-3">2020 - 2021</li>
        </ul>
        <div className="flex flex-col gap-1">
          <p className="font-light text-justify">
            Reponsável por gerenciar e acompanhar erros nos produtos da carteira
            de Crédito Imobiliário.
          </p>
          <p className="font-light text-justify">
            Participei do desenvolvimento e implementação do CRIM (Plataforma
            que facilita o gerenciamento de documentos e a separação das
            cartilhas de crédito imobiliário entre cliente e banco) utilizando
            metodologia ágil <strong>SCRUM</strong>.
          </p>
          <p className="font-light text-justify">
            Ajudei a desenvolver Queries (<strong>SQL Server</strong>) para
            geração de relatórios para a análise de possíveis erros que,
            futuramente, poderiam gerar problemas para contratos de crédito
            imobiliário.
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center w-2/5">
        <img src={CyanCodeGif} alt="Cyan Gif" className="w-80 h-80" />
      </div>
    </div>
  );
}
