const express = require('express')
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const { getCharById } = require('../controllers/getCharById')

const router = express.Router()

router.get('/character/:id', getCharById)

router.get('/login', login)
router.post('/login', postUser)

router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)
// router.get('/fav/clear', clearFav)

module.exports = router
