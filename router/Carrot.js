var express = require('express')
var router = express.Router();
const dbCon = require('../db');

router.post('/add', (req, res) => {
  console.log("reqData : " + JSON.stringify(req.body))
  
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