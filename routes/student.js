const express = require('express');
const router =express.Router();
router.use(express.urlencoded({extended: false}));
const studentcontroller = require('../controllers/studentcontroller')
router.get('/',(req,res)=>{
    res.render('home');
})
router.post('/add/student',(req,res)=>{
    studentcontroller.addStudent(req,res)
})
router.get('/students',(req,res)=>{
    studentcontroller.getStudent(req,res)
})
module.exports= router;