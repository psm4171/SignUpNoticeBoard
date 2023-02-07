// npm i nodemon : 서버 구동을 위한 프레임워크 
// npm i express : 서버를 만들기 위한 프레임워크 express 
const express = require("express");
const app = express(); 
const cors = require("cors"); // 동일 주소가 아니더라도 서버가 연결될 수 있도록 처리 
const session = require("express-session"); 

connect();

const corsOptions = {
    origin: true, 
    credentials: true
};

// express-session을 사용하기 위해 하는 세팅 
app.use(
    session({
        resave: false,
        saveUninitialized: true, 
        secret: "hamletshu",
        cookie: {
            httpOnly: true, 
            secure: false
        }
    })
);

app.use(cors(corsOptions)); 

// json 데이터를 선언 
app.use(express.json());
app.use(express.urlencoded({ extended: true})); // 추가적인 배열을 넘어와서 사용 가능 

// 라우터 설정 
app.use("/member", require("./routes/memberRouter")); 
app.use("/board", require("./routes/boardRouter")); 

// 서버를 실행해주는 부분 
app.listen(8080, () => {
    console.log("서버 접속 성공"); 
})
