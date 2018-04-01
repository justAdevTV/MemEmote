const mongoose = require('mongoose');
const { Schema } = mongoose;
const CardScore = require('./CardScore');

const cardSchema = new Schema({
    date: Date,
    author: String,
    img: String,
    score: CardScore,
    numReviews: {type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('cards', cardSchema);