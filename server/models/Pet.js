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
            enum: ['Cat', 'Dog'],
        required: true,
    },
    isClean: {
        type: Boolean,
        default: '1'
    },
    playedWith: {
        type: Boolean
    },
    fed:{
        type: Boolean,
        default: '1'
    }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
