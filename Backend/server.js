import express from ("express");
const app = express();
import dotenv from 'dotenv'
const BodyParser = require("body-parser")
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer')
const PORT = process.env.PORT.MONGO_DB_URL || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
const ImgeModel = require('./models/ImageModule')
mongoose.connect(PORT).then(()=>{
  console.log('connected to DB');
})
.catch(()=>{
  console.log('Unable to connect');
})

// Storage 
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb)=>{
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage:Storage
}).single('imageTest')
app.post('/upload',(req,res)=>{
  upload(req,res,(err)=>{
    if(err){
      console.log(err);
    }else{
      const newImage = new ImgeModel({
        name: req.body.filename,
        image:{
          data:req.file.filename,
          contentType: 'imgae/png'
        },
      });
      newImage.save().then(()=> res.send("Successfully uploaded")).catch((err)=>console.log(err));

    }

  })
})
app.get("/", (req,res)=>{
  res.send("upload file")
})

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
})
 



 

