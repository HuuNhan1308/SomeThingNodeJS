const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes/index.js');
const db = require('./config/db');

// Connect DB
db.connect();

const app = express();

// Connect public
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/view'));

// Routes init
route(app);

// LISTEN
app.listen(3000, () => console.log`App express js on port: 3000`);
