'use client'

import { addCard } from '@/utils/actions'
import { FC, useRef } from 'react'

const Input: FC<{ listId: string }> = ({ listId }) => {
  const ref = useRef<HTMLFormElement>(null)

  const submit = async (formData: FormData) => {
    const input = formData.get('input')
    if (input === '' || input === null) return
    await addCard(listId, input)
    ref.current?.reset()
  }

  const blur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target.value
    if (input === '') return
    await addCard(listId, input)
    ref.current?.reset()
  }

  return (
    <form ref={ref} action={submit}>
      <input onBlur={blur} name='input' placeholder='Add a card ...' className='border-2 border-black p-1 w-full' />
    </form>
  )
}

export default Input
