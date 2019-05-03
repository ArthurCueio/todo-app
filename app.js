// Require dotenv before anything else
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded());
app.use('/api', apiRouter);

app.listen(process.env.PORT, () => {
  console.log('API started');
});
