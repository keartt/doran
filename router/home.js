var express = require('express')
var router = express.Router();
const dbCon = require('../db');

const collectionName = 'farm'

router.post('/company', (req, res) => {
  // const user = req.session.user; // 저장된 세션의 사용자 정보 가져오기
  // console.log(user)
  dbCon.db.collection(collectionName).find({company : req.body.company , CorD : true}).toArray((err, result) => {
        res.json(result);
    }); 
});

router.post('/department', (req, res) => {
  // req  =  company & CorD 

  dbCon.db.collection(collectionName).find({company : req.body.company , CorD : false}).toArray((err, result) => {
        res.json(result);
    }); 
});

router.post('/my', (req, res) => {
  const user = req.session.user; // 저장된 세션의 사용자 정보 가져오기
  console.log(user);
  // const  eeee = user.email;
  // console.log(eeee);
  const userId = user._id;
  console.log(userId); // _id 값이 출력됩니다.

  // const userId = '강성현'

  dbCon.db.collection(collectionName).find({receiver : userId }).toArray((err, result) => {
        res.json(result);
    }); 
});

module.exports = router;