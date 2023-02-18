var express = require('express')
var app = express()
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

//cors 오류 해결
const corsOption = {
    origin: "*",
    optionSuccessStatus: 200,
};

MongoClient.connect('mongodb+srv://admin:1234@boilerplate.g6vcczn.mongodb.net/?retryWrites=true&w=majority', (error, client) => {
  // 연결되면 할 일
  app.listen(5005, function () {
    console.log('몽고 접속성공! 포트= 5005');
  });
    if (error) return console.log('디비 접속 에러')
    // 연결할 데이터베이스명
    db = client.db('node_test');
  })

app.use(cors(corsOption));
app.use(express.static(__dirname + '/drdr/build'))
app.get('/', (req, res) => {
    res.sendFile('index.html')
});


app.get('/list/company', (req, res) => {
    // collection = 테이블 이름
    db.collection('drList').find().toArray((err, result) => {
        console.log(result)
        const companys = result;
        res.json(companys);
    });

    // const companys = [{ title: "서버", subTitle: "넘김기" }, { title: "김영재에게", subTitle: "잘가라" }, { title: "알고보니", subTitle: "리액트쌉고수?" }]
    // res.json(companys);
});