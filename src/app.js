const express = require("express");
const app = express();
const port = process.env.port || 8080;
const hbs = require("hbs");
const path = require("path");
require("./db/conn");
const SoftTech = require("./models/model");

const paths = path.join(__dirname, "../templates/views");
const pathes = path.join(__dirname, "../templates/partials");
const pathess = path.join(__dirname, "../public");


app.use(express.urlencoded({extended: false}));

app.set("view engine", "hbs");
app.set("views", paths); 
hbs.registerPartials(pathes);
app.use(express.static(pathess));


app.get("/", (req, res) => {
    res.render('index')
})

app.post("/", async (req, res) => {
    try{
     const User = new SoftTech(req.body);
      await User.save();
     res.status(201).render("index");

    }catch(error){
         
        console.log("Not Submit Error" + error);
    }

})




app.listen(port, () => {
    console.log("Server  is running...");
})