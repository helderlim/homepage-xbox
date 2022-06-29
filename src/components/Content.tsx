import imgUrl from '../assets/controle-xbox.png'


export function Content() {
  return(
    <section className='flex flex-1 justify-center pt-[309px]'>
      <div className='max-w-[570px] mr-[158px]'>
        <h2 className='text-[64px] max-w-[495px] leading-[83.2px] font-semibold'><span className='text-primary'>Desempenho</span><br/>aperfeiçoado</h2>
        <p className='font-medium max-w-[400px]'>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
      </div>
      <img src={imgUrl} alt="" />
    </section>
  )
}