const mongoose = require("mongoose");

// 비구조 할당 
const {Schema} = mongoose;
const userSchema = new Schema({
    email: {
        type: String,
        required: true, 
        unique: true 
    },
    
    name: {
        type: String,
        require: true
    },

    password: {
        type: String, 
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userShema); 
