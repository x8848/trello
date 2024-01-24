import List from '@/components/List'
import { getBoard } from '@/utils/actions'
import { PageProps } from '@/utils/types'
import { FC } from 'react'

const Page: FC<PageProps> = async ({ params }) => {
  const { name, lists } = await getBoard(params.id)

  return (
    <div className='min-h-screen bg-orange-400 flex-grow p-2'>
      <div className='border-2 border-black w-fit p-1 font-bold bg-yellow-300'>{name}</div>
      <div className='flex gap-1 mt-1'>
        {lists.map(({ id, name }) => (
          <List id={id} name={name} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Page
