const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/Courses_NodeJS', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('RUN SUCCESSFULLY!!!');
    } catch (ERR) {
        console.log('ERROR!!!', ERR);
    }
}

module.exports = { connect };
