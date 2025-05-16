const express = require('express');
const { initializeRoutes } = require("./routes/index");
const fs = require("fs");
const { errorHandler } = require("./middleware/errorHandler");
const { port, filePath } = require('./config/config');


    async function startApplication() {
        try {
            const app = express();

            await initializeRoutes(app);
            app.use(errorHandler)

            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            }

            app.listen(port, () => {
                console.log(`SERVER listening on PORT: ${port}`);
            });

        } catch (error) {
            console.error('ERROR in Starting Application', error);
            console.error('Killing Application process');
            process.exit(1);
        }
    }

startApplication()
