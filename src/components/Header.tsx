import { Logo } from "./Logo";

export function Header() {
  return (
    <header  className="w-full py-5 flex items-center justify-around">
      <Logo/>
      <nav className="max-w-[460px] flex justify-around flex-1">
        <a href="#" className="text-[17px]">Visão geral</a>
        <a href="#" className="text-[17px]">Jogos</a>
        <a href="#" className="text-[17px]">Galeria</a>
        <a href="#" className="text-[17px]">Unbox</a>
      </nav>

      <button className="h-[60px] w-[224px] bg-primary text-black">VER DISPONIBILIDADE</button>
    </header>
  )
}