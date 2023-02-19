var express = require('express')
var app = express()
const cors = require('cors');
const Home = require('./router/home')
const Farm = require('./router/farm')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//cors 오류 해결
const corsOption = {
    origin: "*",
    optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.static(__dirname + '/drdr/build'))

app.listen(5005, function () {
  console.log(' 접속성공  5005');
});

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.use("/list", Home);
app.use("/farm", Farm);

