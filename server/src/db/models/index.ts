import { Sequelize } from 'sequelize'

import { Room, RoomSchema } from './room.model'
import { Player, PlayerSchema } from './player'

export function setupModels(sequelize: Sequelize) {
  Room.init(RoomSchema, Room.config(sequelize))
  Player.init(PlayerSchema, Player.config(sequelize))
}
