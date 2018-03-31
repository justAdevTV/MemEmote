const mongoose = require('mongoose');
const { Schema } = mongoose;
const CardScore = require('./CardScore');

const cardSchema = new Schema({
    date: Date,
    author: String,
    img: { data: Buffer, contentType: String },
    score: CardScore,
    _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('cards', cardSchema);