import {
  Model,
  Sequelize,
  ModelAttributes,
  InitOptions,
  DataTypes,
} from 'sequelize'

import { timestampsConfig } from '../utils/constants'

export const ROOM_TABLE = 'tbl_room'

export const RoomSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  link: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    // Replace default value with a name auto-generated using faker
    defaultValue: 'Lorem ipsum',
  },
  status: {
    type: DataTypes.STRING(20),
  },
}

export class Room extends Model {
  static config(sequelize: Sequelize): InitOptions {
    return {
      sequelize,
      tableName: ROOM_TABLE,
      modelName: 'Room',
      ...timestampsConfig,
    }
  }
}
