const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardScoreSchema = new Schema({
    joy: {default: 0, type: Number},
    anger: {default: 0, type: Number},
    sorrow: {default: 0, type: Number},
    suprise: {default: 0, type: Number}
});

module.exports = cardScoreSchema;