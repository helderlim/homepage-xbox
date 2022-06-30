import { List } from "./List";

export function FaqQuestions() {

  return (
    <article className="flex flex-1 justify-center pt-10 lg:pt-[300px]">
      <div className="flex flex-1 justify-between flex-col max-w-[312px] lg:max-w-[1225px]">

        <h3 className="text-[24px] lg:text-[48px] font-semibold"><span className='text-primary'>Perguntas </span>frequentes</h3>

        <div className="pt-10 lg:pt-[60px]">
          <List />
          <List />
        </div>

      </div>


    </article>
  )
}