// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour le parsing du corps des requêtes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Définir les routes
app.get('/', (req, res) => {
    res.send('Page d\'accueil du jeu de quizz');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



// Page de connexion
app.get('/login', (req, res) => {
    res.send('Page de connexion');
});

// Page du quizz
app.get('/quizz', (req, res) => {
    res.send('Page du quizz');
});
