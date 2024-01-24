'use client'

import { DroppableProps } from '@/utils/types'
import { FC } from 'react'

const Droppable: FC<DroppableProps> = ({ id, children, className, onDrop }) => {
  const drop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const targetId = (e.target as EventTarget & { id: string }).id
    const objectId = e.dataTransfer.getData('id')
    if (objectId && targetId) {
      await onDrop(objectId, targetId)
    } else {
      alert(`Can't drop to this area`)
    }
  }

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

  return (
    <div id={id} className={className} onDrop={drop} onDragOver={allowDrop}>
      {children}
    </div>
  )
}

export default Droppable
