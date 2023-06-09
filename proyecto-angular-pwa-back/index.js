const http = require('http')
const express = require('express')
const cors = require('cors')
const webpush = require('web-push')
const ApiRouter = require('./src/routes/index.routes')
const config = require('./config')


const app = express()

webpush.setVapidDetails('mailto:angel@example.com', config.VAPID_KEYS.publicKey, config.VAPID_KEYS.privateKey)

app.use(cors())
app.use(express.json())

app.use(ApiRouter)

const server = http.createServer(app)

server.listen(8080, () => {
  console.log('Listening on  http://localhost:8080')
})