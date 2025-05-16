const { Router } = require("express");
const fileUploadsRoutes = require("./file_routes");

const router = Router();

router.use('/upload', fileUploadsRoutes)

module.exports = router

