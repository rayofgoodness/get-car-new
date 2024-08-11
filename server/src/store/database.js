const knex = require("knex");
const env = require('dotenv')
env.config({ path: '../.env' });

const db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
});

module.exports = db;

