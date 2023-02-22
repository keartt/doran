var express = require('express')
var router = express.Router();
const dbCon = require('../db');

router.post('/company', (req, res) => {
  // const user = req.session.user; // 저장된 세션의 사용자 정보 가져오기
  // console.log(user)

  dbCon.db.collection('drList').find({company : req.body.company , CorD : true}).toArray((err, result) => {
        res.json(result);
    }); 
});

router.post('/department', (req, res) => {
  // req  =  company & CorD 

  dbCon.db.collection('drList').find({company : req.body.company , CorD : false}).toArray((err, result) => {
        res.json(result);
    }); 
});

router.post('/my', (req, res) => {
  // const user = req.session.user; // 저장된 세션의 사용자 정보 가져오기

  dbCon.db.collection('drList').find({receiver : req.body.receiver}).toArray((err, result) => {
        res.json(result);
    }); 
});

module.exports = router;