const express = require('express');
const router = express.Router()

const {getAllProduct,getAllProducttesting} = require("../controller/product")
const get_token = require("../Toeken/secret_token")

router.route("/").get(getAllProduct);
router.route("/testing").get(getAllProducttesting);

router.route("/secret/token").get(get_token)

module.exports = router;