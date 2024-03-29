function apiV(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version:version, __name:"Rodrigo"});
    }
}

// Attribute decorator
function mingLength(length:number){
    return (target: any, key: string)=> {
     let _value = target[key];

     const getter= ()=> "[play]"+_value;

     const setter =(value: string)=> {
        if(value.length < length){
            throw new Error(`Tamanho menor do que ${length}`);
        } else {
            _value = value;
        }
    }

    Object.defineProperty(target, key,{
        get:getter,
        set:setter
    });
 };
}


class Api{
    @mingLength(3)
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("Rodrigo_Black");
console.log(api.name);








// Decorators 

/* Quando você decora uma ação pra injetar em determinada função 


function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class funcionario{}

@ExibirNome
class Joca {}

*/