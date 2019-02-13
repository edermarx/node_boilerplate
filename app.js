// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// ==================== INTERNAL IMPORTS ==================== //

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// use ejs template tag engine
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// serving static files
app.use('/views', express.static(path.join(__dirname, 'views')));

// ==================== FUNCTIONS ==================== //

// returns the full path of the passed view
const getViewPath = view => path.join(__dirname, `views/${view}/${view}.ejs`);

// ==================== ROUTES ==================== //

// ==================== RENDER VIEWS ==================== //

app.get('/', (req, res) => {
    res.render(getViewPath('home'), {
      name: 'Hello',
      list: ['item 0', 'item 1', 'item 2'],
      showItem: [1, 0, 1],
    });
});

// ==================== START SERVER ==================== //

app.listen(process.env.PORT || 3000, () => {
    console.log('READY');
});

// ====================================================== //
