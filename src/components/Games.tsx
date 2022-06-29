import game1 from '../assets/games/game-1.png'
import game2 from '../assets/games/game-2.png'
import game3 from '../assets/games/game-3.png'
import game4 from '../assets/games/game-4.png'


export function Games() {
  return (
    <section className='grid grid-flow-col pt-[300px]'>
      <img src={game1} alt="" className=''/>
      <img src={game2} alt="" />
      <img src={game3} alt="" />
      <img src={game4} alt="" />
    </section>
  )
}