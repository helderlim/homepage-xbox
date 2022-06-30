import { Logo } from "./Logo";

export function Header() {
  return (
    <header
      className="w-full py-5 flex flex-col items-center justify-around
        lg:flex-row"
    >
      <div>

      <Logo />
      </div>
      <nav className="w-full max-w-[312px] pt-[24px] pb-[56px] flex justify-around flex-1 lg:p-0 lg:max-w-[460px]">
        <a href="#" className="text-[17px]">Visão geral</a>
        <a href="#" className="text-[17px]">Jogos</a>
        <a href="#" className="text-[17px]">Galeria</a>
        <a href="#" className="text-[17px]">Unbox</a>
      </nav>

      <button className="h-[60px] w-[312px] lg:w-[224px] font-bold bg-primary text-black ease-in duration-300 hover:-translate-y-1">VER DISPONIBILIDADE</button>
    </header>
  )
}