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
})
