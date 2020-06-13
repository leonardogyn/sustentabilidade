import { Sequelize } from 'sequelize'

import Item from '../app/models/Item'
import Point from '../app/models/Point'
import PointItem from '../app/models/PointItem'

import databaseConfig from '../config/database'

const models = [Item, Point, PointItem]

class Database {
  connection?: any;

  constructor () {
    this.init()
  }

  init () {
    this.connection = new Sequelize(databaseConfig)

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }
}

export default new Database()
