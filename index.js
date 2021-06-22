const express = require('express');
const cors = require('cors');
const data = require('./courses.js');
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({urlencoded: true}))
app.use(cors());

app.use('./api/login', (req, res) =>{
  res.send({
    token: 'testKey'
  })
})


app.post('/api/paid', (req, res) => {
  const {password} = req.body;
  if (password == "TestKey"){
    res.json(data.courses.paid);
  }
  else{
    res.status(401).send("Incorrect Password")
  }
})

app.get('/api/free', (req, res) => {
  res.json(data.courses.free)
})

app.get('/api/images/:id', (req, res)=>{
  console.log("Sending image " + req.params.id)
  res.sendFile(__dirname + `/images/${req.params.id}`)
})

if (process.env.NODE_ENV == 'production') {
  const path = require('path');
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})