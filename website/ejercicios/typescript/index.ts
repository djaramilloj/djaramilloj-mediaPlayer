// //  boolean
// let muted: boolean = true;
// muted = false;

// // numeros
// let numerator: number = 42;
// let denominator: number = 21 ;

// let resultado = numerator/denominator;


// // Array
// let people: string[];
// people = ['hola', 'perro'];
// people.push('hola2')

// let variate: Array<string | number>;


// // enum
// enum Color {
//     rojo = "rojo",
//     verde = "verde", 
//     azul = "azul"
// }

// let fav: Color = Color.rojo;

// // any

// let comodin: any = 'joker';
// comodin = {type: 2};



function add(a: number, b: number): number {
    return a + b;
}

const sum = add (4, 5)


function createSum(a: number): (number) => number{
    return function(b: number) {
        return a + b;
    }
}

const addfour = createSum(4);
const plus = addfour(6);


function fullName(first: string, last: string = 'Smith') {
    return `${first} ${last}`
}


console.log(fullName('Juanda', 'Jaramillo'));




interface Rectangulo {
    ancho: number;
    alto: number;
}


let rec: Rectangulo = {
    ancho: 3,
    alto: 2
}


function area(r: Rectangulo): number {
    return r.alto * r.ancho
}


const areaa = area(rec);

