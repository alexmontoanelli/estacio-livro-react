import Livro from '../modelo/Livro';
import livro from '../modelo/Livro';



let baseUrl = 'http://localhost:3030/livros';

type LivroMongo = {
    _id: String|null;
    codEditora: number;
    titulo: String;
    resumo: String;
    autores: String[]
}

class ControleLivro {

    obterLivros()  {

        return fetch(baseUrl).then(async res => {
            let jsonRes = await res.json();
            return jsonRes.map((i : LivroMongo) => {
                let l = new Livro();
                l.codigo = i._id!;
                l.titulo = i.titulo;
                l.resumo = i.resumo;
                l.autores = i.autores;
                l.codEditora = i.codEditora;
                return l;
            })
        });
    }

    incluir(l: livro) {

        let lm : LivroMongo = {
            _id: null,
            codEditora: l.codEditora,
            titulo: l.titulo,
            resumo: l.resumo,
            autores: l.autores
        };

        return fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(lm)
        }).then(async r => {
            var res =  await  r.json();
            return res.ok;
        });

    }

    excluir(codigo: number){
        
        return fetch(baseUrl + '/' + codigo, {method: 'DELETE'}).then(async r => {
            var res =  await  r.json();
            return res.ok;
        })


    }

}

export default ControleLivro;