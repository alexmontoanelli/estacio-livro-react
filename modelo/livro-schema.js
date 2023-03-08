const banco = require('./conexao');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
})


const LivroSchema = banco.Schema(schema);

const Livro = mongoose.model('livros', LivroSchema);

module.exports = Livro;
