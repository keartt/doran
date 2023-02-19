var express = require('express')
var router = express.Router();
const db = require('../db');

router.post('/select', (req, res) => {

  console.log("리퀘 바디 : " + req.body.title);
    db.db.collection('test').find({ title: req.body.title }).toArray((err, result) => {
      console.log("----- "+result);
    res.json(result);
  });

});



// router.post('/company', (req, res) => {
//   // console.log("리퀘 바디 : "+req.body.id)
//   // req  =  company & CorD 

//         db.db.collection('drList').find({company : req.body.company , CorD : true}).toArray((err, result) => {
//         res.json(result);
//     }); 
// });

// router.post('/department', (req, res) => {
//   // req  =  company & CorD 

//         db.db.collection('drList').find({company : req.body.company , CorD : false}).toArray((err, result) => {
//         res.json(result);
//     }); 
// });

// router.post('/my', (req, res) => {
//   // req  =  receiver: user_id

//         db.db.collection('drList').find({receiver : req.body.receiver}).toArray((err, result) => {
//         res.json(result);
//     }); 
// });

module.exports = router;