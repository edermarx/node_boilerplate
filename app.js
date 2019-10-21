// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

// ==================== INTERNAL IMPORTS ==================== //

// ==================== GLOBAL VARIABLES ==================== //

const app = express();

// ==================== MIDDLEWARE ==================== //

app.use(cors());
app.use(express.json());
app.use('/views', express.static(path.join(__dirname, 'views')));

// ==================== FUNCTIONS ==================== //

// returns the full path of the passed view
const getViewPath = view => path.join(__dirname, `views/${view}/${view}.html`);

// ==================== ROUTES ==================== //

// ==================== RENDER VIEWS ==================== //

app.get('/', (req, res) => {
    res.sendFile(getViewPath('home'));
});

// ==================== START SERVER ==================== //

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});

// ====================================================== //
