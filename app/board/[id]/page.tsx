import List from '@/components/List'
import { getBoard } from '@/utils/actions'

const Page = async ({ params }: { params: { id: string } }) => {
  const board = await getBoard(params.id)

  return (
    <div className='min-h-screen bg-orange-400 flex-grow p-2'>
      <div className='border-2 border-black w-fit p-1 font-bold bg-yellow-300'>{board.name}</div>
      <div className='flex gap-1 mt-1'>
        {board.lists.map(({ id, name }) => (
          <List id={id} name={name} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Page
