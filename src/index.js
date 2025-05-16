const express = require('express');
const { initializeRoutes } = require("./routes/index");
const fs = require("fs");
const {errorHandler} = require("./middleware/errorHandler");


async function startApplication() {
    try {
        const app = express();
      
        await initializeRoutes(app);
        app.use(errorHandler)

        if (!fs.existsSync('public/uploads')) {
            fs.mkdirSync('public/uploads');
        }

        app.listen(3000, () => {
            console.log(`SERVER listening on PORT: 3000`);
        });

    } catch (error) {
        console.error('ERROR in Starting Application', error);
        console.error('Killing Application process');
        process.exit(1);
    }
}

startApplication()
