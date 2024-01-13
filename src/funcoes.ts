// Funções

function addNumber(x: number, y: number){
    return x + y;
}

function addToHello(name:string): string{
    return `Hello ${name}`;
}
                                      // Poderia usar Any
function Ligar(phone: number| string): number | string{
    return phone;
}

// Função Assincrona
async function getDataB(id:number): Promise<string>{
    return 'Rodrigo'
}


let soma: number = addNumber(2, 5);

console.log(soma);
console.log(addToHello('Rodrigo'));
console.log(Ligar(81984423591));