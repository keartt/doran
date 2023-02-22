var express = require('express')
var router = express.Router();
const dbCon = require('../db');

// 당근 주기
router.post('/add', (req, res) => {
  // console.log("reqData : " + JSON.stringify(req.body))
  
  var ObjectId = require('mongodb').ObjectID; // 이거 필수 
  var objId = new ObjectId();
  const reqData = req.body;
  const dataAdd = {
    ...reqData,
    _id: objId,
    date: new Date()
  };
  
  dbCon.db.collection('carrot').insertOne(dataAdd, (error, result) => {
    console.log('저장완료');
  });
  res.send({carrotId:objId});
});


// 당근 검색 -> 농장id로 검색
router.post('/select', (req, res) => {

  
  var farm = req.body.farmId;

  // console.log("리퀘 바디 : " + req.body.farmId);
  dbCon.db.collection('carrot').find({farmId: req.body.farmId}).sort({_id : -1}).toArray((err, result) => {
      res.json(result);
  });

});

module.exports = router;