import { Request, Response } from "express"
import { sign } from 'jsonwebtoken'
import { SECRET } from "server/config"

const usuariosRegistrados = [
  { username: 'cfalco', password: '1234', name: 'Charles Falco' }
]

const login = (req: Request, res: Response) => {
  const data = req.body

  const usuario = usuariosRegistrados.find(usuario => usuario.username === data.username && usuario.password === data.password)

  if (!usuario) {
    return res.status(403).json({ msg: 'Las credenciales son invalidas.' })
  }

  const payload = {
    name: usuario.name
  }

  const jwt = sign(payload, SECRET)

  return res.json({ jwt })
}

export default {
  login,
}