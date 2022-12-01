const mongoose = require('mongoose');

exports.dbConn = async() => {
    try{
        const dbURL = "mongodb+srv://SachitTarway:Sachit123@cluster0.x0yny3g.mongodb.net/Alumini-nest?retryWrites=true&w=majority"
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Database connected`);
    }catch(err){
        console.log(`Database connection error: ${err}`);
    }
}