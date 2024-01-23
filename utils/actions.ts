'use server'

import { revalidateTag } from 'next/cache'
import { KEY, TOKEN, TRELLO_USER_ID } from './constants'

export const getBoards = async () => {
  const response = await fetch(
    `https://api.trello.com/1/members/${TRELLO_USER_ID}/boards?key=${KEY}&token=${TOKEN}&fields=id,name`
  )
  return response.json() as Promise<[{ id: string; name: string }]>
}

export const getBoard = async (id: string) => {
  const response = await fetch(
    `https://api.trello.com/1/boards/${id}?fields=id,name&lists=open&list_fields=id,name&key=${KEY}&token=${TOKEN}`
  )
  return response.json() as Promise<{ id: string; name: string; lists: [{ id: string; name: string }] }>
}

export const getCards = async (id: string) => {
  const response = await fetch(`https://api.trello.com/1/lists/${id}/cards?fields=id,name&key=${KEY}&token=${TOKEN}`, {
    next: { tags: ['cards'] }
  })
  return response.json() as Promise<[{ id: string; name: string }]>
}

export const addCard = async (listId: string, input: FormDataEntryValue) => {
  const response = await fetch(
    `https://api.trello.com/1/cards?idList=${listId}&name=${input}&key=${KEY}&token=${TOKEN}`,
    { method: 'POST' }
  )
  if (response.ok) revalidateTag('cards')
}

export const moveCard = async (cardId: string, listId: string) => {
  const response = await fetch(`https://api.trello.com/1/cards/${cardId}?idList=${listId}&key=${KEY}&token=${TOKEN}`, {
    method: 'PUT'
  })
  if (response.ok) revalidateTag('cards')
}
