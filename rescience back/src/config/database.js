const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    // connectionString: process.env.DATABASE_URL
    user:'postgres',
    password:'xXx2021xXx',
    host:'localhost',
    port:5432,
    database:'Rescience'
});

pool.on('connect', () => {
    // console.log('Maybe its working');
});
  
module.exports = {
    query: (text, params) => pool.query(text, params),
};
