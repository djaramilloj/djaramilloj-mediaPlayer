// function* simpleGenerator() {
//     console.log('hola');
//     yield 1; //ceder
//     yield 2;
//     yield 3;
//     console.log('chao');
    
// } 

// const gen = simpleGenerator();
// gen.next();


// function* idMaker() {
//     let id = 1;
//     while (true) {
//         yield id;
//         id++;
//     }
// }

// const r = idMaker();
// console.log(r.next().value);
// console.log(r.next().value);
// console.log(r.next().value);
// console.log(r.next().value);
// console.log(r.next().value);
// console.log(r.next().value);
// console.log(r.next().value);



function* fibonacci() {
        let a = 1;
        let b = 1;
        while (true) {
            const rta = a+b;
            a = b;
            b = rta;
            yield rta;
        }
    }

const fibo = fibonacci();
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);

console.log(fibo.next().value);
console.log(fibo.next().value);


    