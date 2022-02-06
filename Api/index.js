const express = require('express')
const app = express()
const port = 5000;

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const CategoryRoute = require('./routes/categories');
const multer = require("multer");
const cors = require('cors');
const path = require('path');

app.use(cors());


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")));

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true,
})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

const storage = multer.diskStorage({
  destination: (req, file, cb)=> {
    cb(null, "images");
  },
  filename: (req, file, cb)=> {
    cb(null, req.body.name)
  }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
  res.status(200).json("File has been uploaded...")
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute); 
app.use('/api/categories', CategoryRoute);

app.get("/", (req, res)=>{
  res.send("hello world")
})
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})