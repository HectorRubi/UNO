import {
  Sequelize,
  Model,
  ModelAttributes,
  DataTypes,
  InitOptions,
} from 'sequelize'

import { timestampsConfig } from './../utils/constants'

export const DECK_TABLE = 'tbl_deck'

export const DeckSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
}

export class Deck extends Model {
  public static config(sequelize: Sequelize): InitOptions {
    return {
      sequelize,
      tableName: DECK_TABLE,
      modelName: 'Deck',
      ...timestampsConfig,
    }
  }
}
