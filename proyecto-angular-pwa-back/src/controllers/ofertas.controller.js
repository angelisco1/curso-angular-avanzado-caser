const axios = require('axios')
const webpush = require('web-push')
const config = require('../../config')
const { FIREBASE_SUSCRIPCIONES_URL } = require('./suscripciones.controller')

const OFERTAS_URL = `${config.FIREBASE_URL}/ofertas`


const getOfertas = async (req, res) => {
  const resp = await axios.get(`${OFERTAS_URL}.json`)
  const ofertas = resp.data

  const listaOfertas = []
  for (let id in ofertas) {
    listaOfertas.push({
      ...ofertas[id],
      id: id
    })
  }

  return res.json(listaOfertas)
}

const getOfertaById = async (req, res) => {
  const ofertaId = req.params.ofertaId
  const resp = await axios.get(`${OFERTAS_URL}/${ofertaId}.json`)

  const oferta = resp.data
  oferta.id = ofertaId

  return res.json(oferta)
}

const createOferta = async (req, res) => {
  const oferta = req.body
  const resp = await axios.post(`${OFERTAS_URL}.json`, oferta)

  const ofertaId = resp.data.name
  oferta.id = ofertaId

  const respSuscripciones = await axios.get(FIREBASE_SUSCRIPCIONES_URL)

  const payload = {
    notification: {
      title: 'Nueva oferta 🎊',
      body: `${oferta.titulo} (${oferta.salario}$)`
    }
  }

  Object.values(respSuscripciones.data).forEach(async suscripcion => {
    await webpush.sendNotification(suscripcion, JSON.stringify(payload))
    console.log('Notificación enviada...')
  })

  return res.status(201).json(oferta)
}

module.exports = {
  getOfertas,
  getOfertaById,
  createOferta,
}