import { ReactNode } from 'react'

export interface PageProps {
  params: { id: string }
}

export interface IdNameProps {
  id: string
  name: string
}

export interface DraggleProps {
  id: string
  className?: string
  children: ReactNode
}

export interface DroppableProps extends DraggleProps {
  onDrop: (id: string, targetId: string) => Promise<void>
}
