const mongoose = require("mongoose");
const validator = require("validator");

const softSchema =  new mongoose.Schema({
          
      fname: {
          type: String,
          required: true
      },
      email:{
          type: String,
          required: true,
          unique: true,
          validate(value){
              if(!validator.isEmail(value)){
                  throw new Error("Email Is invalid");
              }
          }

      },
      phone: {
          type: Number,
          required: true,

      },
      message: {
          type: String,
          required: true
      }
})



const SoftTech = new mongoose.model("SoftTech", softSchema);

module.exports = SoftTech;