import { Request, Response } from "express";

let favDigimons: Array<any> = []

const getFavDigimons = (req: Request, res: Response) => {
  return res.json(favDigimons)
}

// TODO: cambiar a toggle
const addFavDigimon = (req: Request, res: Response) => {
  const digimon = req.body

  const digimonIndex = favDigimons.findIndex(d => d.name === digimon.name)

  if (digimonIndex > -1) {
    favDigimons.splice(digimonIndex, 1)
    return res.json({ añadido: false, msg: 'Se ha quitado como favorito' })
  }

  favDigimons = [...favDigimons, digimon]
  return res.json({ añadido: true, msg: 'Se ha añadido como favorito' })
}

export default {
  getFavDigimons,
  addFavDigimon,
}