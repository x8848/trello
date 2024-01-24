import { getCards, moveCard } from '@/utils/actions'
import { IdNameProps } from '@/utils/types'
import { FC } from 'react'
import Draggle from './Draggle'
import Droppable from './Droppable'
import Input from './Input'

const List: FC<IdNameProps> = async ({ id, name }) => {
  const cards = await getCards(id)

  return (
    <Droppable id={id} onDrop={moveCard} className='border-2 border-black px-1 pt-2 pb-20 w-[200px] bg-white'>
      <div className='font-bold'>{name}</div>
      <div className='flex flex-col gap-1'>
        {cards.map(({ id, name }) => (
          <Draggle id={id} key={id} className='border-2 border-black p-1'>
            {name}
          </Draggle>
        ))}
        <Input listId={id} />
      </div>
    </Droppable>
  )
}

export default List
