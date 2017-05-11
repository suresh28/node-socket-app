const express = require('express');
const bodyParser=require('body-parser');
//const mongoose = require('mongoose');


var app=express();
const port = process.env.PORT || '3000';

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).send('Hello Socket IO App');
})


app.listen(port,()=>{
    console.log(`Server is started and listening on port ${port}`);
})

//module.exports.app = app;