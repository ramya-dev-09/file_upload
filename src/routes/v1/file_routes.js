const { Router } = require("express");
const { upload } = require("../../middleware/storage");
const fileController = require("../../controller/fileUploads");
const router = Router()

router.route('/')
    .post(upload.single("file"), fileController.uploadFiles)

router.route('/:fileName')
    .get(fileController.getFile)


module.exports = router;