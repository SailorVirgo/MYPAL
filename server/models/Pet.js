const mongoose = require('mongoose');

const { Schema } = mongoose;

const petSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 13,
        default: 0
    },
    isClean: {
        type: Boolean,
        default: '1'
    },
    playedWith: {
        type: Boolean,
        default: '0'
    },
    hunger:{
        type: Number,
        min: 0,
        max: 100,
        default: 0
    }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
