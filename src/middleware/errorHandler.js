const multer = require("multer");

function errorHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File should not exceed 5 MB' });
        }
        return res.status(400).json({ error: err.message });
    }
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = { errorHandler };
