import type { NextApiRequest, NextApiResponse } from 'next'
import _ControleLivros from '../../../classes/controle/ControleLivros';

var controleLivros = new _ControleLivros;

export default (req: NextApiRequest, res: NextApiResponse) => { 

    if (req.method == 'GET'){
        
        try {

            res.status(200).json(controleLivros.obterLivros())  

        } catch (e){

            res.status(500).json({'error': 'server error'});

        }

        return;

    } 

    if (req.method == 'POST'){

        var livro = req.body;
        controleLivros.incluir(livro);

        res.status(200).json({'ok':'sucesso'});

        return;

    }

    res.status(405).json({'error': 'method not allowed'});

}

