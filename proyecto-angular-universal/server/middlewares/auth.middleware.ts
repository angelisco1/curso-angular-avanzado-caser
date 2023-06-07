import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { SECRET } from 'server/config'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const jwt = req.headers.authorization

  if (!jwt) {
    return res.status(400).json({ msg: 'No me estas mandando el token' })
  }

  try {
    const payload = verify(jwt, SECRET)
    return next()
  } catch (err) {
    return res.status(403).json({ msg: 'El token es invalido' })
  }

}