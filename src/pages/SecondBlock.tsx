export function SecondBlock() {
  return (
    <div className="flex flex-col gap-4 text-center items-center h-screen w-auto bg-slate-900  backdrop-blur-sm backdrop-brightness-50">
      <div className="flex pb-4">
        <div className="h-20 w-[2px] bg-gradient-to-b from-[#2d51bd] "></div>
      </div>
      <div className="w-auto flex flex-col text-center items-center gap-8">
        <div className="m-auto w-3/5 max-w-7xl justify-center text-center">
          <h3 className="text-5xl pb-8 uppercase font-bold border-b-[1px] mb-8 border-zinc-700">Quem Sou</h3>
          <div className="flex pb-4 justify-center">
            <div className="h-[5px] w-20 bg-[#04D361] mt-[-35px]"></div>
          </div>
          <p className="px-8 text-lg">Apaixonado por tecnologia e desenvolvimento de softwares, procuro novos desafios para desenvolver minhas habilidades, continuar evoluindo e adquirindo experiência da área de TI. Meu objetivo é poder fazer parte de uma empresa na qual eu possa aprender, ensinar e evoluir junto de todos, não só no aspecto profissional e técnico, mas também pessoal e em como agregar e somar no trabalho em equipe.</p>
          <div className="grid grid-cols-3 gap-4 align-center p-24">
            <section className="">Oi</section>
            <section className="">Oi</section>
            <section className="">Oi</section>
            <section className="">Oi</section>
            <section className="">Oi</section>
            <section className="">Oi</section>
          </div>
        </div>
      </div>

    </div>
  )
}