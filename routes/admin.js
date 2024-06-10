const express = require("express")
const { adminGetController, adminPostController, adminPutController, adminPatchController, adminDeleteController } = require("../controllers/admincontrollers/admin")
const auth = require("../middleware/auth")
const router = express.Router()


router.get("/", adminGetController)
router.post("/", adminPostController)
router.put("/", adminPutController)
router.patch("/", adminPatchController)
router.delete("/", adminDeleteController)


router.use("/report",auth, require("./adminRoutes/report"))
router.use("/downline", require("./adminRoutes/downline"))

module.exports = router