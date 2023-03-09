class ClienteE {
    private numeroConta: string
    private numeroAgencia: string
    private nome: string
    private saldo: number

    constructor(numeroConta: string, numeroAgencia: string, nome: string, saldo: number){
        this.numeroAgencia = numeroAgencia; this.numeroConta = numeroConta; 
        this.nome = nome; this.saldo = saldo

        this.setNumeroConta(numeroConta); 
        this.setNumeroAgencia(numeroAgencia); 
        this.setNome(nome); 
        this.setSaldo
    }
    setNumeroConta(numeroConta: string):void{
        if ((numeroConta.length == 8) && (numeroConta.charAt(6) == "-")){
            this.numeroConta = numeroConta
        }
        else {
            console.log(`Numero da conta Invalido`)
        }
    }
    setNumeroAgencia(numeroAgencia: string):void{
        if ((numeroAgencia.length == 6) && (numeroAgencia.charAt(4) == "-"))[
            this.numeroAgencia = numeroAgencia
        ]
        else {
            console.log(`Numero da Agencia Invalido`)
        }
    }
    setNome(nome: string):void{
        if (nome.length <= 30){
            this.nome = nome
        }
        else{
            console.log(`Tente um nome menor`)
        }
    }
    setSaldo(saldo: number):void{
        if(saldo >= 0){
            this.saldo = saldo
        }
        else{
            console.log(`Saldo negativo não e permitido`)
        }

        // saldo >= 0 ? this.saldo = saldo : console.log(`Saldo negativo não e permitido`)
    }
    realizarDeposito(x: number): void{
        this.setSaldo(this.saldo + x)
    }
    realizarSaque(x: number):void{
        this.setSaldo(this.saldo - x)
    }
    getnumeroConta(): string{
        return this.numeroConta
    }
    getnumeroAgencia(): string{
        return this.numeroAgencia
    }
    getNome(): string{
        return this.nome
    }
    getSaldo(): number{
        return this.saldo
    }
}

let fulano = new ClienteE("123456-7", "1234-5", "Fulano", 200)
fulano.realizarDeposito(300)
fulano.realizarSaque(600)
console.log(`$saldo da conta ${fulano.getSaldo()}`)