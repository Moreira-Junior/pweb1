class ClienteEspecial extends Cliente {

    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array<Cliente>();
    }
}