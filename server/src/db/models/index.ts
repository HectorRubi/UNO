import { Sequelize } from 'sequelize'

import { Room, RoomSchema } from './room.model'

export function setupModels(sequelize: Sequelize) {
  Room.init(RoomSchema, Room.config(sequelize))
}
