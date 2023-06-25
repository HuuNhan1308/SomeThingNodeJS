
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const route = require('./routes/index.js');

// Connect public
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/view'));

// Routes init
route(app);

// LISTEN
app.listen(3000, () => console.log`Example express js on port: 3000`);