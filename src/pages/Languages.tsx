import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNestjs,
  SiServerless,
  SiAmazonaws
} from "react-icons/si";

const languages = {
  Typescript: {
    title: "Typescript",
    image: <SiTypescript />,
    color: "hover:bg-[#2E72BC]",
  },
  Node: {
    title: "NodeJS",
    image: <SiNodedotjs />,
    color: "hover:bg-[#4F9640]",
  },
  Nest: {
    title: "NestJs",
    image: <SiNestjs />,
    color: "hover:bg-[#EA2857]",
  },
  React: {
    title: "ReactJS",
    image: <SiReact />,
    color: "hover:bg-[#2692b0]",
  },
  ReactNative: {
    title: "React Native",
    image: <SiReact />,
    color: "hover:bg-[#2692b0]",
  },
  Serverless: {
    title: "Serverless",
    image: <SiServerless />,
    color: "hover:bg-[#CA4640]",
  },
  AWS: {
    title: "AWS",
    image: <SiAmazonaws />,
    color: "hover:bg-[#232F3E]",
  },
  Tailwind: {
    title: "Tailwind CSS",
    image: <SiTailwindcss />,
    color: "hover:bg-[#185c8d]",
  },
  SASS: {
    title: "SASS",
    image: <SiSass />,
    color: "hover:bg-[#C76494]",
  },
};

export function Languages() {
  return (
    <div className="flex flex-col gap-14 text-center m-auto max-w-3xl py-10" id="languages">
      <h1 className="text-4xl md:text-5xl uppercase font-bold pb-10 border-b-[1px] mx-8 md:mx-0 border-zinc-700 ">Linguagens e Ferramentas que mais Utilizo</h1>
      <div className="px-16 md:px-0 grid grid-cols-3 gap-8 md:gap-14">
        {Object.entries(languages).map(([key, value]) => {
          return (
            <div
              key={key}
              className={`flex items-center group py-4 px-5 md:py-8 md:px-10 justify-self-center bg-violet-400 bg-opacity-10 justify-center text-3xl md:text-5xl rounded-lg hover:px-8 md:hover:px-14 hover:rounded-2xl ${value.color} transition-all duration-500 drop-shadow-2xl hover:z-10`}
            >
              {value.image}
              <span className="max-w-0 truncate text-xl md:text-3xl hover:text-white overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                <span className="pl-2"></span>
                {value.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
