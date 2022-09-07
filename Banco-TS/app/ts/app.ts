let contaController = new ContaController();
let clienteController = new ClienteController();

// contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const clientes = new Clientes();
const cliente = new Cliente('Gustavo', '1234', new Conta('4'));

clientes.inserir(cliente);
console.log('listando clientes');
console.log(clientes.listar());
console.log('pesquisando cliente');
console.log(clientes.pesquisar(cliente.cpf));
console.log('removendo cliente');
console.log(clientes.remover(cliente.cpf));
console.log('listando novamente cliente');
console.log(clientes.listar());