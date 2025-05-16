require("dotenv").config();
const config = process.env;

const port = config.PORT
const filePath = config.FILE_PATH
const retrieveFilePath = config.RETRIEVE_FILE_PATH

module.exports = { port, filePath, retrieveFilePath }

