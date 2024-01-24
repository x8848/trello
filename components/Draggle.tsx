'use client'

import { DraggleProps } from '@/utils/types'
import { FC } from 'react'

const Draggle: FC<DraggleProps> = ({ id, className, children }) => {
  const drag = (e: React.DragEvent<HTMLDivElement>) => {
    const id = (e.target as EventTarget & { id: string }).id
    e.dataTransfer.setData('id', id)
  }

  return (
    <div id={id} className={className} onDragStart={drag} draggable>
      {children}
    </div>
  )
}

export default Draggle
