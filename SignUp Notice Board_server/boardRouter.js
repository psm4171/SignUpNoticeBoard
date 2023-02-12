const express = require("express"); 
const router = express.Router(); 
const Board = require("../schemas/board"); 

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

router.post("/write", async (req, res) => {
    try {
       const obj = {
        writer: req.body._id, 
        title: req.body.title, 
        content: req.body.content
       }; 
       console.log(obj); 
       const board = new Board(obj); 
       await board.save(); 
       res.json({message: "게시글이 업로드 되었습니다."});

    }catch (err){
        console.log(err); 
        res.json({message: false});
    }


});


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
       const board = await Board.find({ _id});
       res.json({board});
     
    }catch (err){
        console.log(err); 
        res.json({message: false});
    }

});

module.exports = router; 




