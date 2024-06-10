const express = require("express")
const { downlineGet, downlinePost, downlinePut, downlineDelete } = require("../../controllers/usercontrollers/downline")
const router = express.Router()

router.route("/").get(downlineGet)
    .post(downlinePost)
    .put(downlinePut)
    .delete(downlineDelete)

module.exports = router