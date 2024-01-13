/* 
    Data modifiers
    public = mesmo que default
    private = Só posso acessar diretamente pela classe
    protecterd só enxergado pela classe e pela subclasse {poo}
*/

/* Classes */
class Personagem {
    protected name?: string;
    poder: number;
    habilidade: number;

    constructor(name:string,poder: number, habilidade: number) {
        this.name = name
        this.poder = poder;
        this.habilidade = habilidade;
    }

    ataque(): void {
        console.log(`Ataque with ${this.poder} points`); // Correção: Utilizando this.poder para imprimir o valor correto
    }
}

// Personagem : Superclass
// Magia: Subclass
class Magia extends Personagem{
    pontosMagia:number
    constructor(name: string, poder:number,habilidade:number, pontosMagia:number){
        super(name, poder,habilidade)
        this.pontosMagia = pontosMagia;
    }
}

const p1 = new Personagem('Batman',10, 98);
const p2 = new Magia('Doutor Estranho',90,100,120)
p1.ataque();