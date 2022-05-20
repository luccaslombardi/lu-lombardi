import { BsGithub, BsInstagram, BsLinkedin, BsSpotify } from "react-icons/bs";

export function FirstBlock() {
  return (
    <div className="container w-auto flex flex-col m-auto items-center">
      <div className=" bg-[#47758e] bg-opacity-40 flex flex-col text-center items-center rounded-full p-8 z-10 drop-shadow-lg">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFYGCyOL7EDIw/profile-displayphoto-shrink_200_200/0/1642860856006?e=1658361600&v=beta&t=WjupcXbihaal7RIAdEap-_KCciQjVlqCu3cm8oJSzD4"
          alt="Luccas Lombardi"
          width={300}
          className="rounded-full border-[20px]  border-sky-900"
        />
      </div>
      <div className="w-96 bg-[#102e42] flex flex-col text-center items-center rounded-lg pt-48 pb-8 px-8 mt-[-11rem]">
          <h1 className="text-3xl">LUCCAS LOMBARDI</h1>
          <h3 className="text-lg">Desenvolvedor Frontend</h3>
        <div className="flex justify-between text-center items-center gap-8 m-auto py-5">
          <BsInstagram size={40} />
          <BsLinkedin size={40} />
          <BsGithub size={40} />
          <BsSpotify size={40} />
        </div>
      </div>
    </div>
  );
}
