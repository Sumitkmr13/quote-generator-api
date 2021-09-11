const mongoose = require('mongoose');

const quotesSchema = mongoose.Schema({
    "quote": String,
    "author": String
}, {
    collection: "quoteGenerator",
});

const quotesModel = mongoose.model('quotesModel',quotesSchema);
module.exports = quotesModel;