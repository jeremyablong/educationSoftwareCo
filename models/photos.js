const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'students'
})

module.exports = User = mongoose.model('students', photoSchema)