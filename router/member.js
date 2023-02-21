var express = require('express')
var router = express.Router();
const dbCon = require('../db');

router.post('/add', (req, res) => {
  // console.log("리퀘 바디 : "+req.body.id)
  // req  =  company & CorD 
  console.log("reqData : " + JSON.stringify(req.body))
    //     db.db.collection('drList').find({company : req.body.company , CorD : true}).toArray((err, result) => {
    //     res.json(result);
    // }); 
    

  // 몽고디비는 _id 값을  Object 형식으로 넣어줘야 해서 아래 과정 진행함
  var ObjectId = require('mongodb').ObjectID; // 이거 필수 

  const reqData = req.body;
  const dataAdd = {
    ...reqData,
    _id: new ObjectId()
  };
  
  dbCon.db.collection('member').insertOne(dataAdd, (error, result) => {
    console.log('저장완료');
  });

});

router.post('/login', (req, res) => {
  // console.log("리퀘 바디 : "+req.body.id)
  // req  =  company & CorD 
  console.log("reqData : " + JSON.stringify(req.body))
    //     db.db.collection('drList').find({company : req.body.company , CorD : true}).toArray((err, result) => {
    //     res.json(result);
    // }); 

  // 몽고디비는 _id 값을  Object 형식으로 넣어줘야 해서 아래 과정 진행함
  var ObjectId = require('mongodb').ObjectID; // 이거 필수 

  const reqData = req.body;
  const dataAdd = {
    ...reqData,
    _id: new ObjectId()
  };
  
  dbCon.db.collection('member').insertOne(dataAdd, (error, result) => {
    console.log('저장완료');
  });

});


module.exports = router;