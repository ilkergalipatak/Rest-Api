const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const error= require('./customerrorhandler/customErrorHandler');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());
const postRoute=require('./routes/posts');
app.use('/posts',postRoute);
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,
      useUnifiedTopology: true},
     () => console.log('connected to db')
)
app.get('/' , (req,res) => {
    res.send('Merhaba dünya');
});
app.use(error);
app.listen(3000);
