import Sequelize from 'sequelize'
import { Column, Table, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table({
  defaultScope: {},
  paranoid: true,
  tableName: 'points'
})
class Point extends Model<string> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  image?: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  email!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  whatsapp!: string;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL
  })
  latitude!: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL
  })
  longitude!: number;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  city!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  uf!: string;

  @CreatedAt
  @Column({
    allowNull: false,
    type: DataType.DATE
  })
  created_at!: Date;

  @UpdatedAt
  @Column({
    allowNull: false,
    type: DataType.DATE
  })
  updated_at!: Date;

  static init (sequelize: any): any {
    super.init(
      {
        image: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        latitude: Sequelize.DECIMAL,
        longitude: Sequelize.DECIMAL,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      },
      {
        sequelize
      }
    )

    return this
  }

  static associate (models: any): void {
    this.belongsToMany(models.Item, {
      through: 'PointItem',
      foreignKey: 'point_id',
      as: 'items'
    })
  }
}

export default Point
