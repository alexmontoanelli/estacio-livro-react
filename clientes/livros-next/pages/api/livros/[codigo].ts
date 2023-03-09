import type { NextApiRequest, NextApiResponse } from 'next'
import _ControleLivros from '../../../classes/controle/ControleLivros';

var controleLivros = new _ControleLivros;

export default (req: NextApiRequest, res: NextApiResponse) => { 

    if (req.method == 'DELETE'){
        
        try {

            controleLivros.excluir(parseInt(req.query.codigo as string));

            res.status(200).json({'ok':'sucesso'});

        } catch (e){

            res.status(500).json({'error': 'server error'});

        }

        return;

    }

    res.status(405).json({'error': 'method not allowed'});

}

