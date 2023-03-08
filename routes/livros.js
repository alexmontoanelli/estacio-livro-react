var express = require('express');
var router = express.Router();

const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async function(req, res, next)  {
    const livros = await obterLivros()
    res.send(livros);
});

router.post('/', async function (req, res, next){
    var resultado = await incluir(req.body);
    if (resultado._id){
        res.send({'status': 'ok', '_id' : resultado._id});
    } else {
        res.send({'status': 'error'});
    }    
});

router.delete('/:id', async function(req, res, next)  {
    const livros = await excluir(req.params.id)
    res.json(livros);
});


module.exports = router;
