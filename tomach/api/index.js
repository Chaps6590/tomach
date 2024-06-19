const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');

const jwt = require('jsonwebtoken');

const app = express();
const port = 4000;
const cors = require('cors');
const {error} = require('console');

const http = require('http').createServer(app);

const io = require('socket.io')(http);

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(express.json());

mongoose
  .connect('mongodb+srv://Chaps:Chaps659@cluster0.pbmahf0.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDb');
  })
  .catch(error => {
    console.log('Error connected to MongoDb', error);
  });

app.listen(port, () => {
  console.log('Server running on',port);
});

const User = require('./models/user');

app.post('/register', async (req, res) => {
  try {
    const userData = req.body;

    const newUser = new User(userData);

    await newUser.save();

    const secretKey = crypto.randomBytes(32).toString('hex');

    const token = jwt.sign({userId: newUser._id},secretKey);
    res.status(200).json({token})

  } catch (error) {
    console.log('Error creating user', error);
    res.status(500).json({error: 'Internal server error'});
  }
});
