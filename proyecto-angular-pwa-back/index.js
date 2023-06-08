const http = require('http')
const express = require('express')
const cors = require('cors')
const ApiRouter = require('./src/routes/index.routes')


const app = express()

app.use(cors())
app.use(express.json())

app.use(ApiRouter)

const server = http.createServer(app)

server.listen(8080, () => {
  console.log('Listening on  http://localhost:8080')
})