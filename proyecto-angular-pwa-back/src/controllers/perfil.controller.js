const axios = require('axios')
const config = require('../../config')

const PERFIL_URL = `${config.FIREBASE_URL}/perfil`

const getPerfil = async (req, res) => {
  const resp = await axios.get(`${PERFIL_URL}.json`)

  const [usuarioId] = Object.keys(resp.data)
  const usuario = resp.data[usuarioId]
  usuario.id = usuarioId

  return res.json(usuario)
}

const registrarUsuario = async (req, res) => {
  const usuario = req.body
  const resp = await axios.post(`${PERFIL_URL}.json`, usuario)

  const usuarioId = resp.data.name
  usuario.id = usuarioId

  return res.status(201).json(usuario)
}

const updatePerfil = async (req, res) => {
  const usuario = req.body
  const resp = await axios.put(`${PERFIL_URL}/${usuario.id}.json`, usuario)

  return res.json(usuario)
}

module.exports = {
  getPerfil,
  updatePerfil,
  registrarUsuario,
}