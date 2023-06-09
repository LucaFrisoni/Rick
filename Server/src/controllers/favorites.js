require("dotenv").config(); // process.env

const STATUS_OK = 200;
const STATUS_ERROR = 404;

let myFavorites = [];

function postFav(req, res) {
  const { id, name, status, species, gender, origin, image } = req.body;
  try {
    if (!id || !name || !image) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "The require information is missing" });
    }
    const character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
    };
    // console.log(character)
    myFavorites.push(character);
    res.status(STATUS_OK).json(myFavorites);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}
function deleteFav(req, res) {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(STATUS_ERROR).json({ message: "id not found" });
    }
    const newFavorites = myFavorites.filter((ch) => ch.id !== Number(id));
    myFavorites = newFavorites;
    res.status(STATUS_OK).json(myFavorites);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}

module.exports = {
  postFav,
  deleteFav,
};