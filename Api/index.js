const express = require('express')
const app = express()
const port = 3000;

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})