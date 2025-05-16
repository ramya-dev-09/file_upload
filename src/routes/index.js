const v1Routes = require('./v1');

async function initializeRoutes(app) {
    console.log('In initializeRoutes()..');
    app.use('/api/v1/', v1Routes);
}

module.exports = {
    initializeRoutes
}