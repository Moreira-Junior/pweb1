class Clientes {

    private _clientes : Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente:Cliente): void{
        this._clientes.push(cliente);
    }

    remover(cpf:string): void{
        const cliente = this.pesquisar(cpf);
        if(cliente){
            const indice = this._clientes.indexOf(cliente);
            if(indice > -1){
                this._clientes.slice(indice, 1);
            }
        }
    }

    listar(): Array<Cliente>{
        return this._clientes;
    }

    pesquisar(cpf:string): Cliente{
        return this._clientes.find(cli => cli.cpf === cpf);
    }
}