const express = require('express')
const OfertasController = require('../controllers/ofertas.controller')

const ApiRouter = express.Router()


ApiRouter.get('/ofertas', OfertasController.getOfertas)
ApiRouter.get('/ofertas/:ofertaId', OfertasController.getOfertaById)
ApiRouter.post('/ofertas', OfertasController.createOferta)


module.exports = ApiRouter