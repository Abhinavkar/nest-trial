const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSignupSchema = new Schema({
    full_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    batch:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    secondary_school:{
        type: String,
        required: true
    },
    high_school:{
        type: String,
        required: true
    },
    graduate:{
        type: String,
        required: true
    },
    post_graduate:{
        type: String,
        required: true
    },
    doctarate:{
        type: String,
        required: true
    }
},{timestamps: true})

exports.User = mongoose.model('user',userSignupSchema);