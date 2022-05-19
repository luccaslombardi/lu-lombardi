export function Profile() {
  return (
    <div className=" bg-zinc-900 bg-opacity-30 container w-8/12 py-20 flex m-auto rounded-lg border border-violet-700">
      <div className="w-1/3 flex flex-col text-center items-center gap-8">
        <img
          src="https://avatars.githubusercontent.com/u/49651834?v=4t"
          alt="Luccas Lombardi"
          width={200}
          className="drop-shadow-lg"
        />
        <div>
          <h1 className="text-3xl">LUCCAS LOMBARDI</h1>
          <h3 className="text-lg">Desenvolvedor Frontend</h3>
        </div>
      </div>
      <div className="m-auto w-2/3 text-center">
        <p>conteudo</p>
      </div>
    </div>
  );
}
