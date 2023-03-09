import type { NextApiRequest, NextApiResponse } from 'next'

import _ControleEditora from '../../../classes/controle/ControleEditora';

var controleEditora = new _ControleEditora;


export default (req: NextApiRequest, res: NextApiResponse) => { 

    if (req.method != 'GET'){
        res.status(405).json({'error': 'method not allowed'});
        return;
    }

    try {

        let codEditora = req.query.codEditora as string;

        let nome = controleEditora.getNomeEditora(parseInt(codEditora));

        res.status(200).json({nome: nome});  

    } catch (e){

        res.status(500).json({'error': 'server error'});

    }

}

