const express = require("express")
const { reportGet, reportPost, reportPut, reportDelete } = require("../../controllers/admincontrollers/report")
const router = express.Router()

router.route("/").get(reportGet)
    .post(reportPost)
    .put(reportPut)
    .delete(reportDelete)


module.exports = router