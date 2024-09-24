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
async function updateStudent(req,res) {
    try {
        let id =req.params.id;
        let student = await Student.findOne({_id:id});
        console.log(student,'student');
        student.rollno= req.body.rollno;
        student.firstName= req.body.firstName;
        student.lastName= req.body.lastName;
        student.fatherName= req.body.fatherName;
        student.adharCardNo= req.body.adharCardNo;
        student.mobileNo= req.body.mobileNo;
        await student.save();
        let students = await Student.find({});
        res.render('studentlist',{
            students: students
        });

    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    addStudent,
    getStudent,
    getStudentForEdit,
    updateStudent
}