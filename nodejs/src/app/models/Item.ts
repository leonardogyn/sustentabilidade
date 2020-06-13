import Sequelize from 'sequelize'
import { Column, Table, Model, DataType } from 'sequelize-typescript'

@Table({
  defaultScope: {},
  paranoid: true,
  tableName: 'items'
})
class Item extends Model<Item> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  image?: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  title!: string;

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

  static init (sequelize: any): any {
    super.init(
      {
        image: Sequelize.STRING,
        title: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get () {
            return `${process.env.APP_URL}/uploads/${this.image}`
          }
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      },
      {
        sequelize
      }
    )

    return this
  }

  static associate (models:any):void {
    this.belongsToMany(models.Point, {
      through: 'PointItem',
      foreignKey: 'item_id',
      as: 'points'
    })
  }
}

export default Item
