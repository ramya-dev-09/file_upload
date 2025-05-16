const multer = require("multer");
const { filePath } = require("../config/config");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

function fileFilter(req, file, cb) {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/.jpg', 'application/pdf', 'text/plain'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false)
    const err = new Error('Only .png, .jpg, .jpeg, text and pdf format allowed!')
    if (file == null) {
      err.message = 'File is INVALID'
    }
    err.name = "ERROR_FILE_UPLOAD"
    return cb(err)
  }
}

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
});

module.exports = {
  upload
}