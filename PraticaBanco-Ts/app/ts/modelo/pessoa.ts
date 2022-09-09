class Pessoa {

    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;
    private _contas: Array<Conta>;

    constructor(nome: string, idade: number, dataNascimento: Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
        this._contas = new Array<Conta>();
    }

    get nome(): string{
        return this._nome;
    }

    set nome(novoNome:string){
        this._nome = novoNome;
    }

    get idade(): number{
        return this._idade;
    }
    
    set idade(novaIdade:number){
        this._idade = novaIdade;
    }

    get dataNascimento():Date{
        return this._dataNascimento;
    }

    set dataNascimento(novaData:Date){
        this._dataNascimento = novaData;
    }

    get contas(): Array<Conta>{
        return this._contas;
    }

    saldoTotalContas(): number{
        return this._contas.map(conta => conta.getSaldo()).reduce((total, valor) => total += valor);
    }

    mediaSaldoContas(): number{
        return this.saldoTotalContas()/this._contas.length;
    }

    acrescentarConta(conta: Conta) {
        this._contas.push(conta);
    }

    pesquisarConta(numero: string): Conta{
        return  this._contas.find(conta => conta.numero === numero);
    }

    removerConta(numero: string){
        const contaARemover: Conta = this.pesquisarConta(numero);
        if(contaARemover){
            const indiceARemover = this._contas.indexOf(contaARemover);
            if(indiceARemover > -1){
                this._contas.splice(indiceARemover, 1);
            }
        }
    }
}