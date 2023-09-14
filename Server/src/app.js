const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes')

const server = express()

//middlewares
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

//rutas
server.use('/rickandmorty', router)

module.exports = server
