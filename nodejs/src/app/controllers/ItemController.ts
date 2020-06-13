import { Request, Response } from 'express'
import Item from '../models/Item'

require('dotenv/config')

class ItemController {
  async index (req: Request, res: Response) {
    const items = await Item.findAll()

    if (!items) {
      return res.status(400).json({ message: 'items not found!' })
    }

    const serializedItens = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image: `${process.env.APP_URL}/uploads/${item.image}`
      }
    })

    return res.json(serializedItens)
  }
}

export default new ItemController()
