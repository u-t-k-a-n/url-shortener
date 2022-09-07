const Pool = require("pg").Pool;

const cn = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  allowExitOnIdle: true
};

const pool = new Pool(cn);

module.exports = pool;