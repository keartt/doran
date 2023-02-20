var express = require('express')
var router = express.Router();
const dbCon = require('../db');

router.post('/add', (req, res) => {
  // console.log("리퀘 1 : "+req)
  // console.log("리퀘 2 : "+req.body)
  console.log("reqData : " + JSON.stringify(req.body))
  // console.log("리퀘 4 : "+JSON.stringify(req.body.message))
  // console.log("리퀘 5 : "+req.body.formData)
  // console.log("리퀘 6 : "+req.body.message)
  // console.log("리퀘 7 : "+req.body.isAnonymous)

      // 넣은거
  // { _id : 넣었는데 이걸 농장 아이디 값으로 바꿔줘야 함 ,  
  // imageSrc: selectedImage, 
  // message : message, 
  // isAnonymous : isAnonymous, 
  // date : 작성일, 
      // 아직 못넣은거
  // user_id : 작성자  }
  
  // 몽고디비는 _id 값을  Object 형식으로 넣어줘야 해서 아래 과정 진행함
  var ObjectId = require('mongodb').ObjectID; // 이거 필수 

  const reqData = req.body;
  const dataAdd = {
    ...reqData,
    _id: new ObjectId(),
    date: new Date()
  };
  
  dbCon.db.collection('carrot').insertOne(dataAdd, (error, result) => {
    console.log('저장완료');
  });
});



module.exports = router;