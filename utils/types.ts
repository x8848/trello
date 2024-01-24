import { ReactNode } from 'react'

export interface IdNameProps {
  id: string
  name: string
}

export interface DraggleProps {
  id: string
  children: ReactNode
  className?: string
}

export interface DroppableProps extends DraggleProps {
  onDrop: (id: string, targetId: string) => Promise<void>
}
