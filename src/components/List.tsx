import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";

export function List() {
  const [isArrow, setIsArrow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsArrow(!isArrow)}
        className='flex w-full max-w-[1228px] justify-between'
      >
        Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?
        {isArrow ?
          <CaretUp size={24} className='text-primary' />
          :
          <CaretDown size={24} />
        }
      </button>
      <div className="border-[1px] border-gray-600 mt-[31px] mb-[43px]"></div>
    </div>
  )
}