class Empresa extends PessoaJuridica {

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome, idade, dataNascimento, cnpj);
    }
}