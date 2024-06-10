const express = require("express")
const auth = require("../middleware/auth")
const middleware1 = require("../middleware/middleware1")
const { userGetController, userPostController, userPutcontroller, userPatchcontroller, userDeleteController } = require("../controllers/usercontrollers/user")
const router = express.Router()

router.get('/', auth, middleware1, userGetController)
router.post("/", userPostController)
router.put("/", userPutcontroller)
router.patch("/", userPatchcontroller)
router.delete("/", userDeleteController)
router.use("/report", require("./userRoutes/report"))
router.use("/downline", require("./userRoutes/downline"))

module.exports = router