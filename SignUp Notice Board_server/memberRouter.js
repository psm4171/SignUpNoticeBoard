
const express = require("express"); 
const router = express.Router(); 
const User = require("../schemas/user"); 

// 회원가입 
router.post("/join", async (req, res) => {
    try {
        const obj = {
            email: req.body.email, 
            name: req.body.name,
            password: req.body.password
        }; 

        const user = new User(obj); 
        await user.save();
        res.json({message: "회원가입 되었습니다!"}); 

    }catch (err) {
        console.log(err); 
        res.json({ message: false});
    }
}); 

// 로그인
router.post("/login", async (req, res) => {
    try {
        const obj = {
            email: req.body.email, 
            password: req.body.password
        }; 

        const user = await User.find(obj); // 이메일과 패스워드가 일치하면 user 변수를 찾음 
        console.log(user[0]); // 아이디 패스워드 일치한 1개의 배열 
        if(user[0]) { // 일치한 배열을 찾으면 로그인 완료 표시
            console.log(req.body._id); 
            res.json({message: "로그인 되었습니다!" , _id: user[0]._id});
        }else {
            res.json({message : false}); 
        }
        
    }catch(err) {
        console.log(err);
        res.json({message: false}); 
    }

}); 
