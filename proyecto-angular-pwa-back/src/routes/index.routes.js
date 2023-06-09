const express = require('express')
const OfertasController = require('../controllers/ofertas.controller')
const PerfilController = require('../controllers/perfil.controller')
const SuscripcionesController = require('../controllers/suscripciones.controller')

const ApiRouter = express.Router()


ApiRouter.get('/ofertas', OfertasController.getOfertas)
ApiRouter.get('/ofertas/:ofertaId', OfertasController.getOfertaById)
ApiRouter.post('/ofertas', OfertasController.createOferta)

ApiRouter.get('/perfil', PerfilController.getPerfil)
ApiRouter.post('/perfil', PerfilController.registrarUsuario)
ApiRouter.put('/perfil', PerfilController.updatePerfil)

ApiRouter.post('/suscripciones', SuscripcionesController.createSuscripcion)

module.exports = ApiRouter