var express = require('express')
var router = express.Router();
const dbCon = require('../db');

const { ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());



// 농장 검색 -> 농장id로 접근해야함
router.post('/select', (req, res) => {

  
  var farm = req.body.farmId;

  // console.log("리퀘 바디 : " + req.body.farmId);
  dbCon.db.collection('farm').find({_id: ObjectId(req.body.farmId)}).toArray((err, result) => {
      res.json(result);
  });

});

// 모든 사용자 검색
router.post('/selectUser', (req, res) => {

  // console.log("selectUser");

    dbCon.db.collection('member').find({}).toArray((err, result) => {
    res.json(result);
  });

});


// 농장 추가
router.post('/insert', (req, res) => {
  // console.log("insert");
  // 몽고디비는 _id 값을  Object 형식으로 넣어줘야 해서 아래 과정 진행함
  var ObjectId = require('mongodb').ObjectID; // 이거 필수 
  var objId = new ObjectId();
  const reqData = req.body;
  const dataAdd = {
    ...reqData,
    _id: objId,
    date: new Date()
  };
  
  dbCon.db.collection('farm').insertOne(dataAdd, (error, result) => {
    // console.log('저장완료');
  });
  res.send({farmId:objId});
});

// 검색
router.post('/search/${objId}', (req, res) => {

  // console.log("search");


    dbCon.db.collection('member').find({name : req.body.name}).sort({_id : -1}).toArray((err, result) => {
    res.json(result);
  });

});



module.exports = router;