import Sequelize from 'sequelize'
import { Column, Table, Model, DataType } from 'sequelize-typescript'

@Table({
  defaultScope: {},
  paranoid: true,
  tableName: 'point_items'
})
class PointItem extends Model<PointItem> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    references: {
      model: 'Point',
      key: 'id'
    }
  })
  point_id!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    references: {
      model: 'Item',
      key: 'id'
    }
  })
  item_id!: number;

  @Column({
    allowNull: false,
    type: DataType.DATE
  })
  created_at!: Date;

  @Column({
    allowNull: false,
    type: DataType.DATE
  })
  updated_at!: Date;

  static init (sequelize: any) {
    super.init(
      {
        point_id: Sequelize.INTEGER,
        item_id: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      },
      {
        sequelize
      }
    )

    return this
  }

  static associate (models: any) {
    PointItem.belongsTo(models.Point, { foreignKey: 'point_id' })
    PointItem.belongsTo(models.Item, { foreignKey: 'item_id' })
  }
}

export default PointItem
