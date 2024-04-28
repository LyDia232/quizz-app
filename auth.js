// auth.js

const express = require('express');
const router = express.Router();
const User = require('./db');

// Page de connexion
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password }, (err, user) => {
        if (err || !user) {
            res.status(401).send('Identifiants incorrects');
        } else {
            res.send('Connexion réussie');
        }
    });
});

module.exports = router;
