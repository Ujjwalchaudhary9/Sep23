const express = require('express');
const path = require('path');
const student = require('./routes/student');
const app =express();
const connection =require('./connection');
connection();
app.set('view engine','ejs');
app.set('views', path.resolve('./views'));
app.use(student);


app.listen(3000,(err)=>{
    if(err){
        console.log("error");
    } else {
        console.log('server is running on 3000');
    }
})