var express = require('express')
var router = express.Router();
const dbCon = require('../db');

router.post('/company', (req, res) => {
  // console.log("리퀘 바디 : "+req.body.id)
  // req  =  company & CorD 

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
  // req  =  receiver: user_id

  dbCon.db.collection('drList').find({receiver : req.body.receiver}).toArray((err, result) => {
        res.json(result);
    }); 
});

module.exports = router;