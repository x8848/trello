import { getCards } from '@/utils/actions'
import { FC } from 'react'
import Input from './Input'

const List: FC<{ id: string; name: string }> = async ({ id, name }) => {
  const cards = await getCards(id)

  return (
    <div className='border-2 border-black px-1 py-2 w-[200px] bg-white'>
      <div className='font-bold'>{name}</div>
      <div className='flex flex-col gap-1'>
        {cards.map(({ id, name }) => (
          <div className='border-2 border-black p-1' key={id}>
            {name}
          </div>
        ))}
        <Input listId={id} />
      </div>
    </div>
  )
}

export default List
