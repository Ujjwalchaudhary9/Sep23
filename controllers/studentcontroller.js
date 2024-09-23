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
module.exports = {
    addStudent,
    getStudent
}