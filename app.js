var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.listen(3000, function() {
    console.log("start node.js server on port 3000 !")
});

//static setting
app.use(express.static('public'))

//json 데이터를 받기 위한 post(클라이언트의 응답 json형태 및 Post 받기 설정)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//url routing
app.get('/', function(req, res) {
    console.log("/(root)")
    //res.send("Hello world !")
    //해당 파일을 클라이언트에게 전달
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req, res) {
    console.log("/main")
    res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post', function(req, res) {
    console.log(req.body.email)
    //get -> req.param('email')
    //post -> body.parser(npm install body-parser --save)
    res.send('<h1>Welcome '+ req.body.email + '</h1>');
})


