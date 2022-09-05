require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');

const { Pool } = require('pg')
const connectionString = process.env.DATABASE_URL 
const pool = new Pool({ connectionString: connectionString })
pool.connect()
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })

const indexRouter = require('./routes/index');

app.use(cors());
app.use("/", indexRouter);

app.listen(process.env.PORT || 5000)
