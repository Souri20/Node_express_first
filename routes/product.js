const express = require('express');
const router = express.Router()

const {getAllProduct,getAllProducttesting} = require("../controller/product")

router.route("/").get(getAllProduct);
router.route("/testing").get(getAllProducttesting);

module.exports = router;