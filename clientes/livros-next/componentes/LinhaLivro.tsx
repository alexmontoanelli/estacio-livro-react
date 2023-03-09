import Livro from '@/classes/modelo/Livro';
import _ControleEditora from '../classes/controle/ControleEditora';
import React   from 'react';
var controleEditora = new _ControleEditora;


import _ControleLivros from '../classes/controle/ControleLivros';
var controleLivros = new _ControleLivros;

type LinhaLivroProps = {
    livro: Livro,
    excluir(numero : string) : void
  }


function nomeEditora( editoraCodigo : number){
    return controleEditora.getNomeEditora(editoraCodigo);
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props : LinhaLivroProps) => { 

    let style = {
        textAlign: 'left'
    };

    return <tr>
        <td>
            {props.livro.titulo} <br />

            <a href="#" className='btn btn-danger' onClick={() => props.excluir(props.livro.codigo)}>Excluir</a>
        </td>
        <td>{props.livro.resumo}</td>
        <td>{nomeEditora(props.livro.codEditora)}</td>
        <td>
            <ul>  
                {props.livro.autores.map((item, index)=>{
                    return <li  key={index}>{item}</li>
                })}
            </ul>
        </td>
    </tr>
}

