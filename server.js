var express = require('express')
var app = express()
const path = require('path');

const cors = require('cors');
const Home = require('./router/home')
const Farm = require('./router/farm')
const Carrot =require('./router/Carrot')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//cors 오류 해결
const corsOption = {
    origin: "*",
    optionSuccessStatus: 200,
};

app.use(cors(corsOption));
// app.use(express.static(__dirname + '/drdr/build'))

app.use(express.static(path.join(__dirname, '/drdr/build' )));

app.listen(5005, function () {
  console.log(' 접속성공  5005');
});

// app.get('/', (req, res) => {
//     res.sendFile('index.html')
// })
// 사용자가 아무 url을 입력하면("*") 리액트 HTML을 보내라
// 리액트에서 /url 라우팅 했던거 노드에서 그대로 쓸 수 있도록 만듦
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'drdr/build', 'index.html'));
});

app.use("/list", Home);
app.use("/farm", Farm);
app.use("/carrot", Carrot)

