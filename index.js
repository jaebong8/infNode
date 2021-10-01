const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://jaebong8:a13794862!@cluster0.ogold.mongodb.net/todoapp?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e));


app.get('/', function (req, res) {
    res.send('Hellow World. 기본페이지입니다.')
})
app.listen(5000, function () {
    console.log('listening on 5000')
})
