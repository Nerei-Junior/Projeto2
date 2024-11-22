const express = require('express');
const Exercise = require('../models/Exercise');
const router = express.Router();

// Endpoint para buscar exercícios com filtros
router.get('/search', async (req, res) => {
    const { name, category, difficulty } = req.query;

    try {
        const query = {};

        if (name) query.name = new RegExp(name, 'i'); // Busca por nome parcial
        if (category) query.category = category;
        if (difficulty) query.difficulty = difficulty;

        const exercises = await Exercise.find(query);
        res.json(exercises);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar exercícios' });
    }
});

module.exports = router;
