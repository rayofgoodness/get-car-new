const db = require("../../store/database");
module.exports = {
    create: createUser,
    list: getUsersList
}

async function createUser(req, res) {
    console.log(req);
}

async function getUsersList(req, res) {
    try {
        const response = await db('users')
        res.json(response);
    } catch (e) {
        console.error(e);
    }
}