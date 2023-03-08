class Cliente {
    private numeroConta: number;
    private numeroAgencia: number;
    private nome: string;
    private saldo: number;

    constructor(numeroConta: number, numeroAgencia: number, nome: string, saldo: number) {
        this.numeroConta = numeroConta;
        this.numeroAgencia = numeroAgencia;
        this.nome = nome;
        this.saldo = saldo;
    }

    public realizarDeposito(valor: number): void {
        this.saldo += valor; 
    }

    public realizarSaque(valor: number): void {
        this.saldo -= valor;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public getNome(): string {
        return this.nome;
    }

    public getNumeroConta(): number {
        return this.numeroConta;
    }

    public getNumeroAgencia(): number {
        return this.numeroAgencia;
    }
}

class TestaCliente {
    public static main(): void {
        let fulano: Cliente = new Cliente(1, 1, "Fulano", 0);
        fulano.realizarDeposito(100);
        fulano.realizarSaque(50);
        console.log(`Nome: ${fulano.getNome()}`);
        console.log(`Conta: ${fulano.getNumeroConta()}`);
        console.log(`Agencia: ${fulano.getNumeroAgencia()}`);
        console.log(`Saldo: ${fulano.getSaldo()}`);

        let beltrano: Cliente = new Cliente(2, 1, "Beltrano", 0);
        beltrano.realizarDeposito(100);
        beltrano.realizarSaque(50);
        console.log(`Nome: ${beltrano.getNome()}`);
        console.log(`Conta: ${beltrano.getNumeroConta()}`);
        console.log(`Agencia: ${beltrano.getNumeroAgencia()}`);
        console.log(`Saldo: ${beltrano.getSaldo()}`);
    }
}

TestaCliente.main();