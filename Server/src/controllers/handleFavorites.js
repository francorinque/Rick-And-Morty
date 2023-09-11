let myFavorites = []

const postFav = (req, res) => {
	const character = req.body // {...}
	const alreadyExists = myFavorites.find(el => el.id === character.id)

	if (!alreadyExists) {
		myFavorites.push(character)
		res.status(200).send(myFavorites) // [...]
	}
}

const deleteFav = (req, res) => {
	const { id } = req.params
	if (id) {
		myFavorites = myFavorites.filter(char => char.id !== Number(id))
		res.status(200).send(myFavorites)
	}
}

const clearFav = (req, res) => {
	myFavorites = []
	res.status(200).send(myFavorites)
}

module.exports = { postFav, deleteFav, clearFav }
