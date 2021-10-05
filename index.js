const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose
.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e));


app.get('/', function (req, res) {
    res.send('Hellow World. 기본페이지입니다. nodemon 설치')
})



app.post('/register', (req,res)=> {
    const user = new User(req.body);

    user.save((err,userInfo)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({success: true})
    })

})



app.listen(5000, function () {
    console.log('listening on 5000')
})
