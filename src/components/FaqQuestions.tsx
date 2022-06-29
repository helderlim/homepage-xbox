import { List } from "./List";

export function FaqQuestions() {

  return (
    <article className="flex flex-1 justify-center pt-[300px]">
      <div className="flex flex-1 justify-between flex-col max-w-[1225px]">

        <h3 className="text-[48px] font-semibold"><span className='text-primary'>Perguntas </span>frequentes</h3>

        <div className="pt-[60px]">
          <List />
          <List />
        </div>

      </div>


    </article>
  )
}