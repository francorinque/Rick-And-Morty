const express = require('express')
const cors = require('cors')
const router = require('./routes')

const server = express()
const PORT = 3001

//middlewares
server.use(cors())
server.use(express.json())

//rutas
server.use('/rickandmorty', router)

server.listen(PORT, () => {
	console.log('Server raised in port: ' + PORT)
})
