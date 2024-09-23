const mongoose =require('mongoose');

async function connection(){
    try {
        await mongoose.connect('mongodb://localhost:27017/batch-2-Sep20');
        console.log("connection created");
    } catch (error) {
        console.log(err);
    }
}

module.exports=connection;
