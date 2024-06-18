import GreenCodeGif from "../../assets/green-code.gif"

export function Tab1() {
  return (
    <div className="flex ">
      <div className="flex flex-col w-full md:w-3/5 py-10 px-3 text-center md:text-left">
        <h1 className="font-bold text-4xl md:text-5xl">Banco Digimais</h1>
        <ul className="flex justify-center md:justify-start pb-10 pt-4 text-base divide-x divide-solid">
          <li className="pr-3 ">Analista de Desenvolvimento de Sistemas</li>
          <li className="pl-3">2023 - Atualmente</li>
        </ul>
        <div className="flex flex-col gap-1">
          <p className="font-light text-justify">
            Atuo como analista time de Sustentação, responsável por garantir a boa funcionalidade dos produtos digitais do Banco.
          </p>
          <p className="font-light text-justify">
            Analiso erros e inconscistências em ambientes de Produção e Homologação, realizando o troubleshooting afim de identificar as causas raiz.
          </p>
          <p className="font-light text-justify">
            Code Review e controle de versionamento com Gitlab e/ou Github, utilizando as principais ferramentas da AWS (Elastic Beanstalk, Lambda, API Getaway, etc).
          </p>
          <p className="font-light text-justify">
            Realizo a análise técnica de problemas encontrados e realizo a criação de escopos afim de mitigar erros e propor melhorias.
          </p>
          <p className="font-light text-justify">
            Organizo e acompanho implantações, correções e atualizações de funcionalidades presentes no Aplicativo do Banco ou produtos relacionados junto dos times de Projetos, Infraestrutra e Desenvolvedores.
          </p>
          <p className="font-light text-justify">
            Análise de Códigos construídos utilizando .NET, React, React Native, Node, Nest, Java e Python.
          </p>
          <p className="font-light text-justify">
            Vizualização de logs dentro de ambientes como Cloudwatch da AWS e Pods no Openshift.
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center w-2/5">
        <img src={GreenCodeGif} alt="Purple Gif" className="w-80 h-80" />
      </div>

    </div>
  );
}
