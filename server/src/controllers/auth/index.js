const db = require("../../store/database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require("../../utils/logger");

module.exports = {
  login, register
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const [user] = await db('users').where({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });

    const responseUser = {
      userName: user.username,
      firstName: user.first_name,
      lastName: user.last_name,
      userCompanyIds: user.company_ids,
      role: user.role_id,
      email: user.email,
    }

    res.json({ message: 'Login successful', token, user: responseUser });
  } catch (e) {
    logger.info(e)
    res.status(500).json({ error: 'Login failed' });
  }
}

async function register(req, res) {
  try {
    const { first_name, last_name, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const [userId] = await addUser({ first_name, last_name, username, email, password: hashedPassword })
    const token = jwt.sign({ userId }, 'secretKey', { expiresIn: '1h' });

    res.json({ message: 'Registration successful', token });
  } catch (e) {
    logger.error(e)
  }
}

function addUser(user) {
  return db('users as u')
    .insert(user)
    .returning('id')
}

function getUserById(id) {
  return db('users as u')
    .join('user_roles as ur', 'u.role_id', 'ur.id')
    .where(id)
    .select(
      'u.user_id',
      'u.username',
      'u.user_email',
      'u.user_phone',
      'u.user_email',
    );
}