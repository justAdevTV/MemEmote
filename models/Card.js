const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
    date: Date,
    author: String,
    img: String,
    score: {type: Object, default: {
        joy: 0,
        anger: 0,
        neutral: 0,
        sorrow: 0,
        suprise: 0
    }},
    numReviews: {type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('cards', cardSchema);