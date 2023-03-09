import type { NextApiRequest, NextApiResponse } from 'next'
import _ControleEditora from '../../../classes/controle/ControleEditora';
var controleEditora = new _ControleEditora;

export default (req: NextApiRequest, res: NextApiResponse) => { 

    if (req.method != 'GET'){
        res.status(405).json({'error': 'method not allowed'});
        return;
    }

    try {

        res.status(200).json(controleEditora.getEditoras())  

    } catch (e){

        res.status(500).json({'error': 'server error'});

    }

}

