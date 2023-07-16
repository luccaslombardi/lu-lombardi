import GreenCodeGif from "../../assets/green-code.gif"

export function Tab4() {
    return (
        <div className="flex ">
            <div className="flex flex-col w-full md:w-3/5 py-10 px-3 text-center md:text-left">
                <h1 className="font-bold text-4xl md:text-5xl">TLS Administradora de Condomínios</h1>
                <ul className="flex justify-center md:justify-start  pb-10 pt-4 text-base divide-x divide-solid">
                    <li className="pr-3">Auxiliar Adminisrativo</li>
                    <li className="pl-3">2016 - 2020</li>
                </ul>
                <div className="flex flex-col gap-1">
                    <p className="font-light text-justify">
                        Exerci atividades como:
                    </p>
                    <p className="font-light text-justify">
                        Fechamento de balancetes, emissão de boletos, atendimento ao cliente, orador de assembleia condominial, criação de apresentações de projetos para condomínios e fechamento de conciliações bancárias.
                    </p>
                    <p className="font-light text-justify">
                        Apesar de não trabalhar diretamente com a área de desenvolvimento, criei uma automação com <strong>Python</strong> para a gerar planilha financeira automaticamente a fim de facilitar o fechamento das conciliações bancárias dos condomínios.
                    </p>
                </div>
            </div>
            <div className="hidden md:flex w-2/5 items-center justify-center">
                <img src={GreenCodeGif} alt="Green Gif" className="w-80 h-80" />
            </div>
        </div>
    )
}