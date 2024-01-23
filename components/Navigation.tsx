import { getBoards } from '@/utils/actions'
import Link from 'next/link'

const Navigation = async () => {
  const boards = await getBoards()

  return (
    <nav className='min-h-screen min-w-[260px] p-1 mt-2'>
      <div className='italic'>Your Boards:</div>
      <div className='flex p-1 flex-col'>
        {boards.map(({ id, name }) => (
          <Link className='border-2 border-black p-1 my-1 font-bold w-full' href={`/board/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
