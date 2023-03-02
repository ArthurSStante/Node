class Aluno{
    nroAluno: number;
    nome: string;
    idade: number;
    p1: number;
    p2: number;

    constructor(nmrAluno: number, nome: string, idade: number, p1: number, p2: number){
        this.nroAluno = nmrAluno
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }
    notaFinal(): number {
        return (this.p1 + this.p2)/2
    }
    passou(): void{
        if (this.notaFinal() >= 6){
            console.log(`Aluno Aprovado`)
        }
        else{
            console.log(`Aluno Reprovado`)
        }
    }
    dadosAluno(): void{
        console.log(`O número do aluno é ${this.nroAluno}, o nome é ${this.nome} e sua idade é de ${this.idade} anos`)
    }
}

let objAluno = new Aluno(2, 'Icaro', 20, 10, 10);
console.log(objAluno);
let media = objAluno.notaFinal();
console.log(`Nota final: ${media}`);
objAluno.passou();
objAluno.dadosAluno();


