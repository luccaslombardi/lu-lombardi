import PurpleCodeGif from "../../assets/purple-code.gif"

export function Tab1() {
  return (
    <div className="flex ">
      <div className="flex flex-col w-3/5 py-10 px-3 text-left ">
        <h1 className="font-bold text-5xl">Brazil2Export Ltda</h1>
        <ul className="flex  pb-10 pt-4 text-base divide-x divide-solid">
          <li className="pr-3">Desenvolvedor Frontend</li>
          <li className="pl-3">2021 - Atualmente</li>
        </ul>
        <div className="flex flex-col gap-1">
          <p className="font-light ">
            Brazil2Export é uma fábrica e exportadora de cosméticos.
          </p>
          <p className="font-light ">
            Atualmente desenvolvo sites de portifólio das marcas (
            <strong>Wordpress, HTML, CSS e PHP</strong>).
          </p>
          <p className="font-light ">
            Monitoro e soluciono problemas nos ambientes de produção
            infraestrutura.
          </p>
          <p className="font-light">
            Presto assistência para problemas relacionados à manutenção de
            equipamentos.
            <br /> Criei um serviço de E-commerce multivendedor para os produtos
            comercializados pela empresa, assim como, empresas de cosméticos
            terceirizados que têm parceira conosco.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-2/5">
      <img src={PurpleCodeGif} alt="Purple Gif" className="w-80 h-80" />
      </div>
      
    </div>
  );
}
