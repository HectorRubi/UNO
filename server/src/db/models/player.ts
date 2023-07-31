import {
  Sequelize,
  Model,
  ModelAttributes,
  InitOptions,
  DataTypes,
} from 'sequelize'

import { timestampsConfig } from './../utils/constants'

export const PLAYER_TABLE = 'tbl_player'

export const PlayerSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(25),
    allowNull: false,
    // Replace default value with a name auto-generated using faker
    defaultValue: 'Lorem ipsum',
  },
}

export class Player extends Model {
  public static config(sequelize: Sequelize): InitOptions {
    return {
      sequelize,
      tableName: PLAYER_TABLE,
      modelName: 'Player',
      ...timestampsConfig,
    }
  }
}
