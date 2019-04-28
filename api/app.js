// Require dotenv before anything else
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const router = require('./router');

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded());
app.use('/', router);

app.listen(6200);
console.log('API started');
