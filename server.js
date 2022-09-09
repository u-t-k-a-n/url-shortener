require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRouter = require('./routes/index.js');

app.use(cors());
app.use("/", indexRouter);

app.listen(process.env.PORT || 5000)


