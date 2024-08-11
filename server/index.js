const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./src/routes')
const env = require('dotenv')
const cors = require('cors')
env.config({ path: '../.env' });

const VITE_BASE_URL = process.env.VITE_BASE_URL;
const PORT = process.env.VITE_PORT;

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
});

app.listen(PORT, () => {
    console.log(`App listening at ${VITE_BASE_URL}:${PORT}`);
});
