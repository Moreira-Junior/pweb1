const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

const p1 = new PessoaFisica('gustavo', 25, new Date(14/5/1997), '1234');
const p2 = new PessoaJuridica('ifpb', 30, new Date(14/5/1992), '1234');
const p3 = new Pessoa('alguem', 35, new Date(24/6/87));
console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);

const repositorioPessoas = new RepositorioPessoas();

const cliente1 = new Cliente('cliente1', 22, new Date(1/5/2000), '12354');
const cliente2 = new Cliente('cliente2', 32, new Date(1/5/1990), '22354');
const cliente3 = new Cliente('cliente3', 42, new Date(1/5/1980), '32354');
const empresa1 = new Empresa('empresa1', 22, new Date(1/5/2000), '222222');
const empresa2 = new Empresa('empresa1', 32, new Date(1/5/1990), '333333');
const empresa3 = new Empresa('empresa1', 42, new Date(1/5/1980), '444444');
const conta1 = new Conta('1', 20);
const conta2 = new Conta('2', 30);
const conta3 = new Conta('3', 40);
const conta4 = new Conta('4', 50);
const conta5 = new Conta('5', 50);
const conta6 = new Conta('6', 0);
const conta7 = new Conta('7', 0);

cliente1.acrescentarConta(conta1);
cliente1.acrescentarConta(conta7);
cliente2.acrescentarConta(conta2);
cliente3.acrescentarConta(conta3);
empresa1.acrescentarConta(conta4);
empresa2.acrescentarConta(conta5);
empresa3.acrescentarConta(conta6);

repositorioPessoas.acrescentar(cliente1);
repositorioPessoas.acrescentar(cliente2);
repositorioPessoas.acrescentar(cliente3);
repositorioPessoas.acrescentar(empresa1);
repositorioPessoas.acrescentar(empresa2);
repositorioPessoas.acrescentar(empresa3);

repositorioPessoas.listar().forEach(pessoa => console.log(pessoa.saldoTotalContas()));
repositorioPessoas.listar().forEach(pessoa => console.log(pessoa.mediaSaldoContas()));
repositorioPessoas.listar().forEach(pessoa => pessoa.contas.forEach(conta => console.log(pessoa.pesquisarConta(conta.numero))));
repositorioPessoas.listar().forEach(pessoa => pessoa.contas.forEach(conta => pessoa.removerConta(conta.numero)));
console.log(repositorioPessoas.listar());
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
