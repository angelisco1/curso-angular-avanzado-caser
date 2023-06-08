const axios = require('axios')

const FIREBASE_URL = 'https://ejemplos-dc1c1.firebaseio.com/curso-angular-avanzado-caser/angel/ofertas'


const getOfertas = async (req, res) => {
  const resp = await axios.get(`${FIREBASE_URL}.json`)
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

const getOfertaById = (req, res) => {
  return res.json({ ok: true })
}

const createOferta = async (req, res) => {
  const oferta = req.body
  const resp = await axios.post(`${FIREBASE_URL}.json`, oferta)

  const ofertaId = resp.data.name
  // { name: 'id-de-la-oferta'}
  oferta.id = ofertaId

  return res.status(201).json(oferta)
}

module.exports = {
  getOfertas,
  getOfertaById,
  createOferta,
}