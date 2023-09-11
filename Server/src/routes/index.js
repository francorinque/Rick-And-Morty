const express = require('express')
const login = require('../controllers/login')
const { getCharById } = require('../controllers/getCharById')
const {
	postFav,
	deleteFav,
	clearFav,
} = require('../controllers/handleFavorites')

const router = express.Router()

router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/fav', postFav)
router.get('/fav/clear', clearFav)
router.delete('/fav/:id', deleteFav)

module.exports = router
