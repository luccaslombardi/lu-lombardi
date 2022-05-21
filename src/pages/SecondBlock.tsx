export function SecondBlock() {
  return (
    <div className="flex h-screen w-auto bg-indigo-900  backdrop-blur-sm backdrop-brightness-50">
      <div className="w-1/3 flex flex-col text-center items-center gap-8">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFYGCyOL7EDIw/profile-displayphoto-shrink_200_200/0/1642860856006?e=1658361600&v=beta&t=WjupcXbihaal7RIAdEap-_KCciQjVlqCu3cm8oJSzD4"
          alt="Luccas Lombardi"
          width={200}
          className="drop-shadow-lg rounded-full"
        />
        <div>
          <h1 className="text-3xl">LUCCAS LOMBARDI</h1>
          <h3 className="text-lg">Desenvolvedor Frontend</h3>
        </div>
      </div>
      <div className="m-auto w-2/3 text-center">
        <h3 className="text-4xl pb-8 uppercase">Quem Sou</h3>
        <p>Apaixonado por tecnologia e desenvolvimento de softwares, procuro novos desafios para desenvolver minhas habilidades, continuar evoluindo e adquirindo experiência da área de TI. Meu objetivo é poder fazer parte de uma empresa na qual eu possa aprender, ensinar e evoluir junto de todos, não só no aspecto profissional e técnico, mas também pessoal e em como agregar e somar no trabalho em equipe.</p>
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

  )
}