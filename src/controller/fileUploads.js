
const path = require("path");
const fs = require("fs");
const { retrieveFilePath } = require("../config/config");

async function uploadFiles(req, res, next) {
    console.log('In uploadFiles()..');
    try {
        return res.status(201).json({ message: "File uploaded scuccessfully", fileName: req.file.filename })
    } catch (error) {
        console.error(`ERROR occurred in uploadFiles() `, error);
        next(error);
    }
}

async function getFile(req, res, next) {
    console.log('In getFile()...');
    try {
        const { fileName } = req.params;
        const filePath = path.join(__dirname, retrieveFilePath, fileName);

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: 'File not found' });
        }

        res.download(filePath);
    } catch (error) {
        console.error(`ERROR occurred in getFile() `, error);
        next(error);
    }
}

module.exports = {
    uploadFiles, getFile
}
