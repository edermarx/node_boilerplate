const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {
    res.send('HI');
});

app.listen(app.get('port'), () => {
    console.log('READY');
});