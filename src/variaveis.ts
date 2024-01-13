

/* Tipos primitovos de váriaveis ou tipos de váriaveis :

boolean : verdadeiro ou falso
number : número obviamente seja decimal ou não
string : palavras ou letras, textos

*/

let ligado:boolean = false;
let nome:string = 'Super Xandão';
let idade:number = 28;
let altura:number = 1.73;


// Tipos especiais : 
// null : tipo nulo não possui nenhum valor
//unfefined : indefinido 
let nulo : null = null;
let indefinido : undefined = undefined;


// Tipos abrangentes :
// any : qualquer coisa ele aceita tudo 
// void : vazio

let retorno:void;
let retornoView: any =  "String"


// Objeto

// Objeto - sem previsibilidade
let produto: object = {
    nome:'Rodrigo',
    idade: 18,
    altura: 1.73,
    cidade: 'Recife'
};

type ProdutoL = {
    nome: string;
    preco: number;
    unidades:number;
}


// Objeto tipado - com previsibilidade
let Mproduto: ProdutoL = {
    nome: 'Sapato NikeBoy',
    preco: 199.99,
    unidades: 10
}


/*  Tuplas */

/* Abaixo declaramos a variável pix conforme as Tuplas que exige uma ordem pela qual foi declarada tipo 
                    Ordem        e aqui tem que seguir
let exemplo : [string,string] = ['nome','sobrenome']; 

tem que respeitar as ordens das informações diferente de um array multitype que aceita qualquer ordem 
                        Ordem
        let infos:(string | number)[]=['Rodrigo',19]

*/

let pix : [string, number, number] = ['conta dio', 250.99, 325.1];


/*Array / vetor
*/

let dados : string[] =['Rodrigo', 'Kaykadas', 'Bruce Wayne']

let subD: Array<string> = ['rodrigo', 'kaykadas, Clark kent', 'Bruce']

// Aceita tanto string quanto números
let infos:(string | number)[]=['Rodrigo',19]


/* DataS  */ 

let niver:Date = new Date('2004-04-23 03:00');
console.log(niver.toDateString());