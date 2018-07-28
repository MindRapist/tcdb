const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('New request from ' + req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null + ' at MAIN_TC_DB'));
});

const port = process.env.PORT || 7777;

app.listen(port, () => {
    console.log('[TCDB] ::::::: Running live on port ' + port + '...');
});