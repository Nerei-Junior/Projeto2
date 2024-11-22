const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // Ex.: "peito", "costas", "pernas"
    difficulty: { type: String, required: true }, // Ex.: "iniciante", "intermediário", "avançado"
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
