import { Router } from 'express'
import AuthController from '../controllers/auth.controller'
import DigimonsController from '../controllers/digimons.controller'
import { authMiddleware } from 'server/middlewares/auth.middleware'


const ApiRouter = Router()

ApiRouter.post('/login', AuthController.login)

ApiRouter.use(authMiddleware)

ApiRouter.get('/fav-digimons', DigimonsController.getFavDigimons)
ApiRouter.post('/fav-digimons', DigimonsController.addFavDigimon)


export default ApiRouter