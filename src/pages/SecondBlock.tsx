import { useState } from "react";
import { Tab1 } from "../components/TabContent/Tab1";
import { Tab2 } from "../components/TabContent/Tab2";
import { Tab3 } from "../components/TabContent/Tab3";

type TabType = "Tab1" | "Tab2" | "Tab3"

export function SecondBlock() {
  const [activeTab, setActiveTab] = useState<TabType>("Tab1")

  function setTab1() {
    setActiveTab("Tab1")
  }
  function setTab2() {
    setActiveTab("Tab2")
  }
  function setTab3() {
    setActiveTab("Tab3")
  }

  return (
    <div className="flex flex-col text-center items-center w-auto pb-24">
      <div className="h-24 w-[2px] bg-gradient-to-b from-[#2d51bd] mb-10" />
      <div className="m-auto w-3/5 max-w-5xl px-10">

        <span className="px-8 text-lg ">
          Apaixonado por tecnologia e desenvolvimento de softwares, procuro
          novos desafios para desenvolver minhas habilidades, continuar
          evoluindo e adquirindo experiência da área de TI. Meu objetivo é
          poder fazer parte de uma empresa na qual eu possa aprender, ensinar
          e evoluir junto de todos, não só no aspecto profissional e técnico,
          mas também pessoal e em como agregar e somar no trabalho em equipe.
        </span>
        <div className="pt-10 ">
          <div className="flex border-b-[1px] border-zinc-700">
            <button onClick={setTab1} className="py-5 w-32">Brazil2Export</button>
            <button onClick={setTab2} className="py-5 w-32">Bradesco</button>
            <button onClick={setTab3} className="py-5 w-32">TLS Admin.</button>
          </div>
          <div className={`w-32 h-1 mt-[-2px] rounded-lg transition-all 
          ${activeTab === "Tab1" ? "bg-purple-500" :
              activeTab === "Tab2" ? "ml-32 bg-cyan-400"
                : activeTab === "Tab3" ? "ml-64 bg-[#04D361]"
                  : null}`} />
          <div>
            {activeTab === "Tab1" ? <Tab1 />
              : activeTab === "Tab2" ? <Tab2 />
                : activeTab === "Tab3" ? <Tab3 />
                  : null}
          </div>
        </div>
      </div>
    </div>
  );
}
