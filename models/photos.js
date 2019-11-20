const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var ImgSchema = new Schema({
    img: { data: Buffer, contentType: String}
}, {
    timestamps: true
});


module.exports = Image = mongoose.model('image', ImgSchema);