class Rio {
    private nome: string;
    private nivel: number;
    private poluido: boolean;

    constructor(nome: string, nivel: number, poluido: boolean) {
        this.nome = nome;
        this.nivel = nivel;
        this.poluido = poluido;
    }

    chover(nivel: number) {
        this.nivel += nivel;
    }

    ensolarar(nivel: number) {
        this.nivel -= nivel;
    }

    limpar() {
        this.poluido = false;
    }

    sujar() {
        this.poluido = true;
    }

    mostra() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Nível: ${this.nivel}`);
        console.log(`Poluído: ${this.poluido}`);
    }
}

class TestaRio {
    public static main() {
        let rio1 = new Rio("Rio 1", 10, false);
        let rio2 = new Rio("Rio 2", 20, true);

        rio1.mostra();
        rio2.mostra();

        rio1.chover(10);
        rio2.ensolarar(5);

        rio1.mostra();
        rio2.mostra();

        rio1.sujar();
        rio2.limpar();

        rio1.mostra();
        rio2.mostra();
    }
}

TestaRio.main();