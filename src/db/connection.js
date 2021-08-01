const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/newwebapp', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected Successfully'))
    .catch((err) => console.error(`Not Connected ${err}`));

module.exports = db;