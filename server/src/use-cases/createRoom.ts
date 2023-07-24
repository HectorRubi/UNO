import { Room } from './../services/room'

export async function createRoom() {
  const room = new Room()
  const data = await room.create()
  return data
}
