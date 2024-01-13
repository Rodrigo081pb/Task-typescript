"use strict";
/*
    Data modifiers
    public = mesmo que default
    private = Só posso acessar diretamente pela classe
    protecterd só enxergado pela classe e pela subclasse {poo}
*/
/* Classes */
class Personagem {
    constructor(name, poder, habilidade) {
        this.name = name;
        this.poder = poder;
        this.habilidade = habilidade;
    }
    ataque() {
        console.log(`Ataque with ${this.poder} points`); // Correção: Utilizando this.poder para imprimir o valor correto
    }
}
// Personagem : Superclass
// Magia: Subclass
class Magia extends Personagem {
    constructor(name, poder, habilidade, pontosMagia) {
        super(name, poder, habilidade);
        this.pontosMagia = pontosMagia;
    }
}
const p1 = new Personagem('Batman', 10, 98);
const p2 = new Magia('Doutor Estranho', 90, 100, 120);
p1.ataque();
