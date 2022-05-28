import { useState } from "react";
import { Tab1 } from "../components/TabContent/Tab1";
import { Tab2 } from "../components/TabContent/Tab2";
import { Tab3 } from "../components/TabContent/Tab3";

type TabType = "Tab1" | "Tab2" | "Tab3"

export function Experiences() {
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
    <div className="flex flex-col py-32 m-auto w-full md:w-4/5 max-w-6xl px-5 md:px-10">
      <h1 className="text-4xl md:text-5xl uppercase font-bold pb-4 text-center">Experiências</h1>
      <div className=" border-b-[1px] border-zinc-700">
        <button onClick={setTab1} className="py-4 md:py-5 w-1/3 md:w-32 text-sm">Brazil2Export</button>
        <button onClick={setTab2} className="py-4 md:py-5 w-1/3 md:w-32 text-sm">Bradesco</button>
        <button onClick={setTab3} className="py-4 md:py-5 w-1/3 md:w-32 text-sm">TLS Admin.</button>
      </div>
      <div className={`w-1/3 md:w-32 h-1 mt-[-2px] rounded-lg transition-all 
          ${activeTab === "Tab1" ? "bg-purple-500" :
          activeTab === "Tab2" ? "ml-[33.3%] md:ml-32 bg-cyan-400"
            : activeTab === "Tab3" ? "ml-[66.6%] md:ml-2/3 md:ml-64 bg-[#04D361]"
              : null}`} />
      <div>
        {activeTab === "Tab1" ? <Tab1 />
          : activeTab === "Tab2" ? <Tab2 />
            : activeTab === "Tab3" ? <Tab3 />
              : null}
      </div>
    </div>
  );
}
