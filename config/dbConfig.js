const mongoose = require("mongoose");

const dbSetup = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URL);
    console.log("DB Connected");
}

module.exports = dbSetup;