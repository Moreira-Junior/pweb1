class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const cliente = this.pesquisar(cpf);
        if (cliente) {
            const indice = this._clientes.indexOf(cliente);
            if (indice > -1) {
                this._clientes.slice(indice, 1);
            }
        }
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find(cli => cli.cpf === cpf);
    }
}
