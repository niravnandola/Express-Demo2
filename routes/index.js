const express = require("express")
const auth = require("../middleware/auth")
const router = express.Router()


router.use("/user", require("./user"))
router.use("/admin", auth, require("./admin"))


module.exports = router