
const path = require("path");
const fs = require("fs");

async function uploadFiles(req, res, next) {
    console.log('In saveProdctImage()..');
    try {
        return res.status(201).json({ message: "File uploaded scuccessfully", fileName: req.file.filename })
    } catch (error) {
        console.error(`ERROR occurred in $saveProductImage() `, error);
        next(error);
    }
}

async function getFile(req, res, next) {
    console.log('In getProductImage()...');
    try {
        const { fileName } = req.params;
        const filePath = path.join(__dirname, '../../public/uploads', fileName);

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: 'File not found' });
        }

        res.download(filePath);
    } catch (error) {
        console.error(`ERROR occurred in getProductImage() `, error);
        next(error);
    }
}

module.exports = {
    uploadFiles, getFile
}
