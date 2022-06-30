import { Logo } from "./Logo";

export function Footer() {
  return(
    <footer className="flex flex-1 justify-center pb-[24px] lg:pb-[84px] pt-[50px] lg:pt-[192px]">
       <div className='flex flex-1 justify-between max-w-[1225px]'>
       <Logo />
      <div className="flex flex-1 justify-between max-w-[454px]">
        <p>© Microsoft 2022</p>
        <p>Todos os direitos reservados</p>
      </div>
       </div>
    </footer>
  )
}