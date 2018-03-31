const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardScoreSchema = new Schema({
    joy: Number,
    anger: Number,
    sorrow: Number,
    suprise: Number
});

module.exports = cardScoreSchema;