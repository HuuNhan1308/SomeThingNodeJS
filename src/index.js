const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const route = require('./routes/index.js');
const db = require('./config/db');

// Connect DB
db.connect();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Connect public
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/view'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Routes init
route(app);

// LISTEN
app.listen(3000, () => console.log`App express js on port: 3000`);
