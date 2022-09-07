class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputContaId: HTMLInputElement;
    private contas: Contas;
    private clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputContaId =
            <HTMLInputElement>document.querySelector("#contaCliente");    
        this.clientes = new Clientes();
        this.contas = new Contas();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let conta = this.contas.pesquisar(this.inputContaId.value);
        if(conta){
            let novoCliente = new Cliente(this.inputNome.value,
                this.inputCpf.value, conta);
                this.clientes.inserir(novoCliente);
                this.inserirClienteNoHTML(novoCliente);
        }
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.contas.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.prepend(botaoApagar);
        document.body.appendChild(elementoP);
    }
}