const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/softdb").then(()=>{
    console.log("DB has connected...");
}).catch((e) => {
    console.log("DB Connection Error: " + e);
})