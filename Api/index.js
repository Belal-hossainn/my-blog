const express = require('express')
const app = express()
const port = 3000;

const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})