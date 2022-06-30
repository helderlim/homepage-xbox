import game1 from '../assets/games/game-1.png'
import game2 from '../assets/games/game-2.png'
import game3 from '../assets/games/game-3.png'
import game4 from '../assets/games/game-4.png'


export function Games() {
  return (
    <section className='grid grid-flow-row items-center justify-center pt-[90px] lg:grid-flow-col lg:pt-[300px]'>
      <img src={game1} alt="" className='w-[312px] mt-10 lg:mt-0 lg:w-auto'/>
      <img src={game2} alt="" className='w-[312px] mt-10 lg:mt-0 lg:w-auto'/>
      <img src={game3} alt="" className='w-[312px] mt-10 lg:mt-0 lg:w-auto'/>
      <img src={game4} alt="" className='w-[312px] mt-10 lg:mt-0 lg:w-auto'/>
    </section>
  )
}