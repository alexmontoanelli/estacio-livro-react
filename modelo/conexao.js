

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const banco = require('mongoose');
banco.connect('mongodb://127.0.0.1:27017/test', options);

module.exports = banco;