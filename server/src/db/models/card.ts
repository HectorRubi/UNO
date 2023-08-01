import {
  Sequelize,
  Model,
  ModelAttributes,
  InitOptions,
  DataTypes,
} from 'sequelize'

import { timestampsConfig } from './../utils/constants'

export const CARD_TABLE = 'tbl_card'

export const CardSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  power: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
}

export class Card extends Model {
  public static config(sequelize: Sequelize): InitOptions {
    return {
      sequelize,
      tableName: CARD_TABLE,
      modelName: 'Card',
      ...timestampsConfig,
    }
  }
}
