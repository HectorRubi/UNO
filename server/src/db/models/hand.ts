import {
  Sequelize,
  Model,
  ModelAttributes,
  InitOptions,
  DataTypes,
} from 'sequelize'

import { timestampsConfig } from './../utils/constants'

export const HAND_TABLE = 'tbl_hand'

export const HandSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
  },
}

export class Hand extends Model {
  public static config(sequelize: Sequelize): InitOptions {
    return {
      sequelize,
      tableName: HAND_TABLE,
      modelName: 'Hand',
      ...timestampsConfig,
    }
  }
}
