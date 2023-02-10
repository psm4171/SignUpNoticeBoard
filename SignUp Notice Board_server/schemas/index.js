const mongoose = require("mongoose"); 
// 몽구스를 사용하는 이유 : 강제 스키마 사용이 가능 
// 편리한 쿼리 


module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== "production"){
            mongoose.set("debug", true);
        } 
        mongoose.connect(
            "mongoose://localhost:27017/til", // mongo DB인 til을 사용
            {
                dbName: "til"
            },

            error => {
                if (error) {
                    console.log("몽고디비 연결 에러", error);
                }
                else {
                    console.log("몽고디비 연결 성공"); 
                }
            }
        );
    };
    connect();
    mongoose.connection.on("error", error => {
        console.log("몽고디비 연결 에러", error); 
    }); 
    mongoose.connection.on("disconnected", () => {
        console.log("몽고디비 연결이 끊어졌습니다. 재연결을 시도합니다."); 
        connect();
    });

    // 스키마 세팅한것을 불러옴 
    require("./user"); 
    require("./board");   



}
