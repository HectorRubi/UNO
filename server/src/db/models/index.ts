import { Sequelize } from 'sequelize'

import { Room, RoomSchema } from './room.model'
import { Player, PlayerSchema } from './player'
import { Hand, HandSchema } from './hand'

export function setupModels(sequelize: Sequelize) {
  Room.init(RoomSchema, Room.config(sequelize))
  Player.init(PlayerSchema, Player.config(sequelize))
  Hand.init(HandSchema, Hand.config(sequelize))
}
