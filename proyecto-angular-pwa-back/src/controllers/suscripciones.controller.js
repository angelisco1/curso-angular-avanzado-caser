const axios = require('axios')
const config = require("../../config")

const FIREBASE_SUSCRIPCIONES_URL = `${config.FIREBASE_URL}/suscripciones.json`

const createSuscripcion = async (req, res) => {
  const suscripcion = req.body
  await axios.post(FIREBASE_SUSCRIPCIONES_URL, suscripcion)

  return res.status(201).json(suscripcion)
}

module.exports = {
  createSuscripcion,
  FIREBASE_SUSCRIPCIONES_URL,
}