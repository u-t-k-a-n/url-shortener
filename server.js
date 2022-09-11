require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


const indexRouter = require('./routes/index.js');


app.use(cors());
app.use("/", indexRouter);

app.use(express.static(path.join(__dirname,'/views/public')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/build", "index.html"));
});

app.listen(process.env.PORT || 5000)


