const express = require("express")
const { reportGet, reportPost, reportPatch, reportDelete } = require("../../controllers/usercontrollers/report")
const router = express.Router()

router.route("/").get(reportGet)
    .post(reportPost)
    .patch(reportPatch)
    .delete(reportDelete)




module.exports = router