import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

const languages = {
  HTML: {
    title: "HTML",
    image: <SiHtml5 />,
    color: "hover:bg-[#b65227]",
  },
  CSS: {
    title: "CSS",
    image: <SiCss3 />,
    color: "hover:bg-[#1185a9]",
  },
  Javascript: {
    title: "Javascipt",
    image: <SiJavascript />,
    color: "hover:bg-[#a5852d]",
  },
  React: {
    title: "ReactJS",
    image: <SiReact />,
    color: "hover:bg-[#2692b0]",
  },
  Node: {
    title: "NodeJS",
    image: <SiNodedotjs />,
    color: "hover:bg-[#4F9640]",
  },
  Typescript: {
    title: "Typescipt",
    image: <SiTypescript />,
    color: "hover:bg-[#2E72BC]",
  },
};

export function ThirdBlock() {
  return (
    <div className="m-auto w-2/5 max-w-3xl grid grid-cols-3 gap-14 py-10">
      {Object.entries(languages).map(([key, value]) => {
        return (
          <div
            key={key}
            className={`flex items-center group py-8 px-10  justify-self-center bg-[#233146] justify-center text-5xl rounded-lg hover:px-14 hover:rounded-2xl ${value.color} transition-all duration-500 drop-shadow-2xl hover:z-10`}
          >
            {value.image}
            <span className="max-w-0 text-3xl hover:text-white overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
              <span className="pl-2"></span>
              {value.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
