const mongoose = require("mongoose");

// 비구조 할당 
const {Schema} = mongoose;
const userSchema = new Schema({
    email: {
        type: String,
        required: true, // not null
        unique: true // 이메일 필드는 고유한 값을 갖는다는 것
    },
    
    name: {
        type: String,
        required: true
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

module.exports = mongoose.model("User", userSchema); 
