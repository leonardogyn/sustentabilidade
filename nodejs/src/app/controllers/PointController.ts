import { Request, Response } from 'express'
import { Op } from 'sequelize'

import Point from '../models/Point'
import Item from '../models/Item'
import PointItem from '../models/PointItem'
import conn from '../../database/index'

require('dotenv/config')

class PointController {
  async index (req: Request, res: Response): Promise<Response> {
    const { city, uf, items } = req.query

    if (!city) {
      return res.status(400).json({ message: 'City is required!' })
    }
    if (!uf) {
      return res.status(400).json({ message: 'UF is required!' })
    }
    if (!items) {
      return res.status(400).json({ message: 'Items are required!' })
    }
    const parsedItems = String(items).split(',').map(item => Number(item.trim()))

    const points = await Point.findAll({
      where: {
        [Op.and]: [
          {
            city: String(city)
          },
          {
            uf: String(uf)
          }
        ]
      },
      include: [
        {
          model: Item,
          as: 'items',
          where: {
            id: parsedItems
          },
          required: true,
          attributes: ['image', 'title', 'url'],
          through: { attributes: [] },
          subQuery: false
        }
      ],
      attributes: ['id', 'name', 'email', 'city', 'uf']

    })

    if (!points) {
      return res.status(400).json({ message: 'Point not found!' })
    }

    return res.json(points)
  }

  async show (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const points = await Point.findOne({
      where: { id: id },
      include: [
        {
          model: Item,
          as: 'items',
          required: false,
          attributes: ['image', 'title', 'url'],
          through: { attributes: [] },
          subQuery: false
        }
      ],
      attributes: ['id', 'name', 'email', 'city', 'uf']
    })

    if (!points) {
      return res.status(400).json({ message: 'Point not found!' })
    }

    return res.json(points)
  }

  async store (req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = req.body

    const transaction = await conn.connection.transaction()

    const point = {
      image: 'no-image',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }

    try {
      const { id } = await Point.create(point, { transaction })

      const pointItems = items.map((item_id: number) => {
        return {
          item_id,
          point_id: id
        }
      })

      await PointItem.bulkCreate(pointItems, { transaction })

      await transaction.commit()

      return res.json({
        id,
        ...point
      })
    } catch {
      // If the execution reaches this line, an error was thrown.
      // We rollback the transaction.
      await transaction.rollback()
      return res.status(400).json({ message: 'Could not create the collection point!' })
    }
  }
}

export default new PointController()
