import editora from '../modelo/Editora';

let editoras : Array<editora> = [
    {codEditora: 1, nome: 'Editora1'},
    {codEditora: 2, nome: 'Editora2'},
    {codEditora: 3, nome: 'Editora3'},
    {codEditora: 4, nome: 'Editora4'},
]


class ControleEditora {
    getEditoras() {
        return editoras;
    }

    getNomeEditora(codEditora: number){
        let f = editoras.filter((e) => {
            return e.codEditora == codEditora;
        });
        if (f.length > 0){
            return f[0].nome;
        }

        return null;        
    }

}

export default ControleEditora;