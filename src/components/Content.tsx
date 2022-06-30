import imgUrl from '../assets/controle-xbox.png'


export function Content() {
  return(
    <section className='flex flex-1 justify-center items-center pt-[59px] flex-col lg:flex-row lg:pt-[309px]'>
      <div className='flex flex-1 flex-col items-center text-center max-w-[348px] lg:text-start lg:max-w-[570px] lg:mr-[158px]'>
        <h2 className='text-[24px] lg:text-[64px] max-w-[238px] lg:max-w-[495px] leading-[31.2px] lg:leading-[83.2px] font-semibold'><span className='text-primary'>Desempenho</span><br/>aperfeiçoado</h2>
        <p className='font-medium max-w-[400px] m-6 lg:m-0'>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
      </div>
      <img src={imgUrl} alt="" className='w-full max-w-[207px] max-h-[143.98px] m-12 lg:m-0 lg:max-w-[347.92px] lg:max-h-[242px] '/>
    </section>
  )
}