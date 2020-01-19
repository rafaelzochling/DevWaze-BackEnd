const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://asdf:37rvinB5mEErLCuZ@cluster0-gj81h.mongodb.net/devwaze?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


app.listen(3333);
