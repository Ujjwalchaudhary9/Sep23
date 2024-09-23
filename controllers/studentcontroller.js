const Student = require('../models/Students');
async function addStudent(req, res) {
    try {
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('studentinsert')
    } catch (error) {
        console.log('ERROR')
    }
}
async function getStudent(req,res) {
    try {
        let students = await Student.find({});
        res.render('studentlist',{
            students: students
        });
    } catch (error) {
        console.log('Error')
    }
}
async function getStudentForEdit(req,res) {
    try {
        let id = req.params.id;
        console.log(id);
        let student = await Student.findOne({_id: id});
        console.log(student);
        res.render('studentforupdate',{
            student: student
        })
    } catch (error) {
        console.log('ERROR');
    }
    
}
module.exports = {
    addStudent,
    getStudent,
    getStudentForEdit
}