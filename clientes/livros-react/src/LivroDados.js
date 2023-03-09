import _controleLivro from './controle/ControleLivros'
import _controleEditora from './controle/ControleEditora'
import React, { useState, useEffect } from 'react';

import {
    useNavigate,
  } from "react-router-dom";
import Livro from './modelo/Livro';
  

let controleLivro = new _controleLivro();
let controleEditora = new _controleEditora();


function LivroDados(){

    let opcoes = controleEditora.getEditoras().map((editora) => {
        return {value: editora.codEditora, text: editora.nome}
    });

    let [titulo, setTitulo] = useState("");
    let [resumo, setResumo] = useState("");
    let [autores, setAutores] = useState("");
    let [codEditora, setCodEditora] = useState(opcoes[0].value)

    const navigate = useNavigate();

    let tratarCombo = function(evento){
        setCodEditora(evento.target.value)
    }

    let incluir = function(evento){
        evento.preventDefault();
        let novoLivro = new Livro();
        novoLivro.codigo = '';
        novoLivro.autores = autores.split('\n')
        novoLivro.titulo = titulo;
        novoLivro.resumo = resumo;
        novoLivro.codEditora = codEditora;
        controleLivro.incluir(novoLivro).then((r) =>{
            navigate('/');
        })
    }

    return (
        <main style={{textAlign: 'left', padding: '10px'}}>
            <h1 style={{textAlign: 'left'}}>Dados do Livro</h1>


            <form onSubmit={incluir}>
            <div className="form-group">
                <label htmlFor="titulo">Titulo</label>
                <input onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control" id="titulo"  placeholder="Titulo" />
            </div>

            <div className="form-group">
                <label htmlFor="resumo">Resumo</label>
                <textarea  onChange={(e) => setResumo(e.target.value)} type="text" className="form-control" id="resumo"  placeholder="Resumo" />
            </div>

            <div className="form-group">
                <label htmlFor="editora">Editora</label>
                <select className="form-control" id="editora" onChange={tratarCombo}>
                    {opcoes.map((e)=>{
                        
                        return <option key={e.value} value={e.value}>{e.text}</option>

                    })}
                </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="autores">Autores (1 por linha)</label>
                <textarea  onChange={(e) => setAutores(e.target.value)} type="text" className="form-control" id="autores"  placeholder="Autores" />
            </div>


            <br />
            <button type="submit" className="btn btn-primary">Salvar dados</button>
            </form>

        </main>
    )

}

export default LivroDados