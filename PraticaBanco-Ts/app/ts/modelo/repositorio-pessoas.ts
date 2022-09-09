class RepositorioPessoas {

    private _pessoas: Array<Pessoa>;

    constructor() {
        this._pessoas = new Array<Pessoa>();
    }

    acrescentar(pessoa: Pessoa){
        this._pessoas.push(pessoa);
    }

    listar(): Array<Pessoa>{
        return this._pessoas;
    }

    pesquisar(nome: string): Pessoa{
        return this._pessoas.find(pessoa => pessoa.nome === nome);
    }

    remover(nome: string){
        const pessoaARemover: Pessoa = this.pesquisar(nome);
        if(pessoaARemover){
            const indiceARemover: number = this._pessoas.indexOf(pessoaARemover);
            if(indiceARemover > -1){
                this._pessoas.splice(indiceARemover, 1);
            }
        }
    }
}