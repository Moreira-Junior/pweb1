class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.inputContaId =
            document.querySelector("#contaCliente");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        let conta = this.contas.pesquisar(this.inputContaId.value);
        if (conta) {
            let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, conta);
            this.clientes.inserir(novoCliente);
            this.inserirClienteNoHTML(novoCliente);
        }
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.contas.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.prepend(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
