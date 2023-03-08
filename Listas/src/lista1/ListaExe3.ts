class Produto {
    private id: number;
    private descricao: string;
    private qtde: number;
    private preco: number;

    constructor(id: number, descricao: string, qtde: number, preco: number) {
        this.id = id;
        this.descricao = descricao;
        this.qtde = qtde;
        this.preco = preco;
    }

    comprar(x: number): void {
        this.qtde += x;
    }

    vender(x: number): void {
        this.qtde -= x;
    }

    subir(x: number): void {
        this.preco += x;
    }

    descer(x: number): void {
        this.preco -= x;
    }

    mostra(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Quantidade: ${this.qtde}`);
        console.log(`Preço: ${this.preco}`);
    }
}

class TestaProduto {
    public static main(): void {
        let produto1: Produto = new Produto(1, "Produto 1", 10, 10);
        let produto2: Produto = new Produto(2, "Produto 2", 20, 20);

        produto1.comprar(10);
        produto1.vender(5);
        produto1.subir(5);
        produto1.descer(10);
        produto1.mostra();

        produto2.comprar(20);
        produto2.vender(10);
        produto2.subir(10);
        produto2.descer(20);
        produto2.mostra();
    }
}

TestaProduto.main();