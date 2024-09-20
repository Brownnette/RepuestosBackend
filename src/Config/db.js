const { Pool } = require("pg");
const { connectionString, ssl } = require("pg/lib/defaults");
require("dotenv").config();

let pool = Pool;
if (process.env.PRODUCTION == "true") {
  pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnathorized: false,
    },
  });
} else {
  pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "hermanoXD",
    database: "Repuestos3J",
    port: 5432,
  });
}

module.exports = pool;
