const mongoose = require("mongoose"); 

const {Schema} = mongoose;
const {
    Types: {ObjectId} 
} = Schema; 

const boardSchema = new Schema({
    writer: {
        type: ObjectId,
        required: true, // 무조건 필수적으로 값을 받음 not null 
        ref: "User" // User를 참조하여 사용 
    },

    title: {
        type: String, 
        required: true
    },

    content: {
        type: String, 
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now // 현재 시간을 기본값으로 
    }


});

module.exports = mongoose.model("Board", boardSchema);
