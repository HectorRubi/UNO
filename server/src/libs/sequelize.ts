import { Sequelize } from 'sequelize'

import { config } from './../config'

import { setupModels } from './../db/models'

const USER = encodeURIComponent(config.dbUsername)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, { dialect: 'postgres', logging: true })

setupModels(sequelize)

export { sequelize }
