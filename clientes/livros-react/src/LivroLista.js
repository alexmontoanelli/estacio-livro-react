import _controleLivro from './controle/ControleLivros'
import _controleEditora from './controle/ControleEditora'
import Livro from './modelo/Livro';
    import React, { useState, useEffect } from 'react';

let controleLivro = new _controleLivro();
let controleEditora = new _controleEditora();




function LivroLista()  {

    let [livros, setLivros] = useState([]);
    let [carregado, setCarregado] = useState(false);


    useEffect(() => {
        if (carregado == false){
            controleLivro.obterLivros().then((livros) => {
                setLivros(livros)
                setCarregado(true);
            })
            
        }
    });

    function excluir(codigo){
        
        controleLivro.excluir(codigo).then((r) => {
            setCarregado(false);
        })
        
    }

      
    return (
        <div style={{padding:'10px'}}>
            <h1 style={{textAlign:'left'}}>Catálogo de Livros</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Titulo</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                {livros.map((item, index)=>{
                    return <LinhaLivro key={index} livro={item} excluir={excluir}></LinhaLivro>
                })}
                </tbody>   
            </table> 
        </div>
    
    )

}

class LinhaLivro extends React.Component {


    constructor(props) {
        super(props);
      }
    

    nomeEditora(){
        return controleEditora.getNomeEditora(this.props.livro.codEditora);
    }

    
    

    render() {
        
        let style = {
            textAlign: 'left'
        };

        return <tr>
            <td>
                {this.props.livro.titulo} <br />

                <a href="#" className='btn btn-danger' onClick={() => this.props.excluir(this.props.livro.codigo)}>Excluir</a>
            </td>
            <td>{this.props.livro.resumo}</td>
            <td>{this.nomeEditora()}</td>
            <td>
                <ul>  
                    {this.props.livro.autores.map((item, index)=>{
                        return <li style={style} key={index}>{item}</li>
                    })}
                </ul>
            </td>
        </tr>
    }
}


export default LivroLista;