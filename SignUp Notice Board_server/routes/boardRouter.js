const express = require("express"); 
const router = express.Router(); // 라우터 변수를 통해 서버를 받아옴 
const Board = require("../schemas/board"); 

// get인지 post인지 확인 필요
// 게시글을 삭제하는 부분 
router.post("/delete", async (req, res) => {
    try {
        await Board.remove({
            _id: req.body._id // id값을 파라미터를 넘겨 id값을 가진 해당 값을 삭제 
        });

        res.json({ message: true}); 

    }catch (err){
        console.log(err); 
        res.json({message: false});
    }

});

// 게시글을 수정하는 부분 
router.post("/update", async (req, res) => {
    try {
        await Board.update({
            _id: req.body._id}, 
            {$set: {
                writer: req.body.writer, 
                title: req.body.title, 
                content: req.body.content
            }}); 

            res.json({message: "게시글이 수정되었습니다. "}); 

    }catch (err){
        console.log(err); 
        res.json({message: false});
    }

});

// 게시글을 작성하는 부분  
router.post("/write", async (req, res) => {
    try {
       const obj = {
        writer: req.body._id, 
        title: req.body.title, 
        content: req.body.content
       }; 
       console.log(obj); 
       const board = new Board(obj); // 게시글을 작성하면 새로운 객체를 생성 
       await board.save(); 
       res.json({message: "게시글이 업로드 되었습니다."});

    }catch (err){
        console.log(err); 
        res.json({message: false});
    }


});

// 게시글 목록을 조회하는 부분 
router.post("/getBoardList", async (req, res) => {
    try {
       const _id = req.body._id; 
       // _id를 참고해서 writer가 해당되면 sort로 정렬 생성된 시간을 -1로 내림차순 기준
       const board = await Board.find({ writer: _id}, null, {sort: {createdAt: -1}});
       res.json({ list: board}); // list 키값으로 board라는 리스트를 보내줌 

    }catch (err){
        console.log(err); 
        res.json({message: false});
    }

});

router.post("/detail", async (req, res) => {
    try {
        const _id = req.body._id; 
       // _id를 참고해서 writer가 해당되면 sort로 정렬 생성된 시간을 -1로 내림차순 기준
       const board = await Board.find({ _id}); // id가 일치하는 값을 BoardDetail로 보냄 
       res.json({board});
     
    }catch (err){
        console.log(err); 
        res.json({message: false});
    }

});

module.exports = router; // 라우터 내보내기가 존재해야 서버가 정상적으로 작동 




