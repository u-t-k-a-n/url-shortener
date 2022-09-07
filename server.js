require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));


const indexRouter = require('./routes/index.js');

app.use(cors());
app.use("/", indexRouter);

app.listen(process.env.PORT || 5000)


