
    // Exercici 1.1: Arrow functions
    
    // Exercici 1
    let a = 4;
    let b = 5;

    const add = (a, b) => a + b;

    console.log("Exercici 1", add(a, b));

    let n = 101;

    // Exercici 2
    const randomNumber = (n) => Math.floor(Math.random() * n);

    console.log("Exercici 2", randomNumber(n));


    // Exercici 3
    class Person{
        constructor(nombre){
            this.nombre = nombre;
        }

        greet(){
            return `Hola, ${this.nombre}`
        }
    }

    let nom = "Ivan";

    let person = new Person(nom);

    let resultado = person.greet();

    console.log("Exercici 3:", resultado);

    // Exercici 4

const arr = [1, 89, 45, 4, 8, 6];

const printNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        console.log('Exercici4', number);
    }
};

printNumbers(arr);

// Exercici 5
function mensaje() {
    console.log("Com va això?");
} 

const mensajeDelay = () => setTimeout(mensaje, 3000);

mensajeDelay();

// Exercici 1.2: Operador ternari

// Exercici 1

let edad = 23;

const potConduir = (edad >= 18) ? `La persona amb edad de ${edad} pot conduir` : `La persona te menys que 18 anys i no pot conduir`;

console.log(potConduir);

// Exercici 2

let num1 = 34;
let num2 = 67;

const result = (num1 > num2)? `Num1 ${num1} és més gran` : `Num2 ${num2} és més gran`;
console.log(result);

// Exercici 3

const postiuNegatiuZero = (num) => {
        return (num === 0) ? `Número 0` : (num > 0)? `Positiu` : `Negatiu`;
    }

    let num = 0;
    console.log(postiuNegatiuZero(num));


    const trobarMaxim = (a1, b1, c1) => {

        return (a1 > b1 && a1 >c1) ? `Número a té el valor màxim` : (b1 > c1) ? `Número b té el valor màxim` : `Número c té el valor màxim`;

    }

    let a1 = 5;
    let b1 = 2;
    let c1 = 3;

    let result2 = trobarMaxim(a1, b1, c1);

    console.log(result2);
 
    // Exercici 4

    const arr1 = [23, 44, 55, 66, 77, 88]
    
    const parOInpar = () => {

        let resultados = [];
        for (let i = 0; i<arr1.length; i++) {

            let number1 = arr1[i];
            let numVerificar = number1 % 2;
            let result = (numVerificar === 0) ? `El número ${arr1[i]} és par` : `El número ${arr1[i]} és inpar`;

            resultados.push(result);
            }
            return resultados;
        }
    let respuesta = parOInpar();

    respuesta.forEach(result => console.log(result));
    
    // Exercici 1.3: Callbacks

     // Exercici 1

    const processar = (num, callback) => {
        callback (num);
    }

    const mostrarNum = (num) => {

        console.log(`El número és ${num}`);
    }

    processar(23, mostrarNum);


