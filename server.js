const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
const Home = require('./router/home');
const Farm = require('./router/farm');
const Carrot = require('./router/Carrot');
const Member = require('./router/member');

const session = require('express-session');
const login = require('./router/login');


app.use(express.urlencoded({ extended: true }))
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const corsOption = {
    origin: "*",
    optionSuccessStatus: 200,
};
app.use(cors(corsOption));
app.listen(5005, function () {
  console.log(' 접속성공  5005');
});

app.use(express.static(path.join(__dirname, '/drdr/build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'drdr/build', 'index.html'));
});

// app.use(express.static(__dirname + '/drdr/build'))
// app.get('/', (req, res) => {
//   res.sendFile('index.html')
// })





app.use("/list", Home);
app.use("/farm", Farm);
app.use("/carrot", Carrot);
app.use("/member", Member);
app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use('/login', login);
