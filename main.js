
    // Exercici 1.1: Arrow functions
    
    let a = 4;
    let b = 5;

    const add = (a, b) => a + b;

    console.log("Exercici 1", add(a, b));

    let n = 101;

    const randomNumber = (n) => Math.floor(Math.random() * n);

    console.log("Exercici 2", randomNumber(n));

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


const arr = [1, 89, 45, 4, 8, 6];

const printNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        console.log('Exercici4', number);
    }
};

printNumbers(arr);


function mensaje() {
    console.log("Com va això?");
} 

const mensajeDelay = () => setTimeout(mensaje, 3000);

mensajeDelay();
   