import imgUrl from '../assets/xbox.png'
import imgLuz from '../assets/luz-verde.png'


export function Main() {
  return (
    <main className="w-full flex flex-1 flex-col items-center pt-[24px] lg:pt-[183px]">
      <h1 className="text-[36px] lg:text-[72px] font-semibold">Xbox series X</h1>
      <span className='text-[16px] lg:text-[24px] text-primary p-2 lg:p-11 font-bold'>PEDIDO ANTECIPADO</span>
      <img src={imgLuz} alt=""  className='w-full max-w-[1209px] max-h-[482px] absolute z-[-1]'/>
      <img src={imgUrl} alt=""  className='max-w-[1235px] max-h-[597px] w-full'/>
    </main>
  )
}