const express = require('express');
const bodyParser=require('body-parser');
//const mongoose = require('mongoose');


var app=express();


app.use(bodyParser.json());


app.listen('3000',()=>{
    console.log('Server is started and listening on port 3000');
})

//module.exports.app = app;