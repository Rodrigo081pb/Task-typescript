"use strict";
const bot1 = {
    id: "1",
    name: "Tony Stark",
};
const bot2 = {
    id: "1",
    name: "Cyborg",
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Batman");
console.log(p.sayHello());
