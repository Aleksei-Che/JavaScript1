
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
class Person {
    constructor(nombre) {
        this.nombre = nombre;
    }

    greet() {
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

const result = (num1 > num2) ? `Num1 ${num1} és més gran` : `Num2 ${num2} és més gran`;
console.log(result);

// Exercici 3

const postiuNegatiuZero = (num) => {
    return (num === 0) ? `Número 0` : (num > 0) ? `Positiu` : `Negatiu`;
}

let num = 0;
console.log(postiuNegatiuZero(num));


const trobarMaxim = (a1, b1, c1) => {

    return (a1 > b1 && a1 > c1) ? `Número a té el valor màxim` : (b1 > c1) ? `Número b té el valor màxim` : `Número c té el valor màxim`;

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
    for (let i = 0; i < arr1.length; i++) {

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
    callback(num);
}

const mostrarNum = (num) => {

    console.log(`El número és ${num}`);
}

processar(23, mostrarNum);


//    Exercici 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

const calculadora = (num1, num2, callback) => {

    return callback(num1, num2);

}

const suma = (a, b) => {
    return a + b;
}

let total = calculadora(4, 9, suma);

console.log("El resultat de la suma és: ", total);



// Nivell 2


// Exercici 3
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.


async function esperarISaludar() {

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => resolve("Jaume"), 2000);
    });

    let result = await promise;

    console.log(result);
}

esperarISaludar();



// Exercici 4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

const processarElements = (arr3, fn) => {

    arr3.forEach(item => fn(item));

}

const multiplicarPerTres = (num) => {
    console.log(num * 3);
}

let arr3 = [2, 3, 4, 5];

processarElements(arr3, multiplicarPerTres)


// Nivell 3
// Exercici 5

// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

const processarCadena = (cadena, fncallback) => {

    let cadenaMajusc = cadena.toUpperCase();

    fncallback(cadenaMajusc);
}

let mostrarCadena = (cadena) => {

    console.log(cadena);
}

let cadena = "bon dia, com va?";

processarCadena(cadena, mostrarCadena);

// Exercici 1.4: Rest & Spread operators

// Nivell 1


// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

let array1 = [23, 45, 66, 11];
let array2 = ['a', 'b', 'c'];
let array3 = [...array1, ...array2];

console.log(array3);

// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

const suma1 = (...nombres) => {
    return nombres.reduce((acc, num) => acc + num, 0);
}

console.log(suma1(100, 1, 2, 3));

// Nivell 2
// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
    nom: "Barcelona",
    poblacio: 1700000,
    regio: "Catalunya"
}

const objecte2 = { ...objecte1 };
objecte2.poblacio = 1620000;

console.log(objecte1);
console.log(objecte2);

// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const elements = ['blau', 'vermell', 'verd', 'blanc', 'negre'];

const [primer, segon, ...resta] = elements;

console.log(primer); // 'blau'
console.log(segon);  // 'vermell'
console.log(resta);  // ['verd', 'blanc', 'negre']


// Nivell 3
// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

const tresArg = (arg1, arg2, arg3) => {
    console.log(`Arg1: ${arg1}`);
    console.log(`Arg2: ${arg2}`);
    console.log(`Arg3: ${arg3}`);

}

const tresElem = ["Manresa", "Terrassa", "Sabadell"];

tresArg(...tresElem);


// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const obj1 = {
    nom: "Joan Miro",
    anys: "1893 - 1983",
}

const obj2 = {
    ofici: "pintor",
    moviment: "surrealisme",
}

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

// Exercici 1.5: Array transformations

// Nivell 1
// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const arrNum = [1, 2, 3, 4];

let arrQuadrat = arrNum.map(item => item ** 2);
console.log(arrQuadrat);

// Exercici 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const arrNum2 = [1, 2, 3, 4];

let numParells = arrNum2.filter(item => item % 2 === 0);
console.log(numParells);


// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const arrNum3 = [1, 10, 8, 11];

let majorDeu = arrNum3.find(item => item > 10);
console.log(majorDeu);

// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const arrNum4 = [13, 7, 8, 21];

let sumaTotal = arrNum4.reduce((acc, num) => acc + num, 0);
console.log(sumaTotal);


// Nivell 2


// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

const arrNum5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const metodosArr = arrNum5.filter(item => item >= 10).map(item => item * 2).reduce((acc, item) => acc + item, 0);
console.log(metodosArr);

// Nivell 3
// Exercici 6
// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament


const arrNum6 = [11, 12, 13, 14];

const totsMajorsQueDeu = arrNum6.every(num => num > 10);
console.log(totsMajorsQueDeu);

const algunMajorQueDeu = arrNum6.some(num => num > 10);
console.log(algunMajorQueDeu);

// Exercici 1.6: Array loops

// Nivell 1

// Exercici 1
// forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(nom => console.log(nom));

// Exercici 2
// for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

let nomsForOf = ['Anna', 'Bernat', 'Clara'];

for (let nom of nomsForOf) {

    console.log(nom);
}

// Exercici 3
// filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];

let numerosArr = [1, 2, 3, 4, 5, 6];

let arrDeParells = numerosArr.filter(item => item % 2 === 0);

console.log(arrDeParells);

// Nivell 2


// Exercici 4
// for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

let objForIn = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (let clau in objForIn) {

    console.log(`${clau}: ${objForIn[clau]}`);
}

// Exercici 5
// for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];
let numeros = [1, 2, 3, 4, 5, 6];

for (let num of numeros) {
    if (num === 5) {
        break;
    }
    console.log(num);
}

// Nivell 3
// Exercici 6
// for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): 

let nomsPerIndex = ['Anna', 'Bernat', 'Clara'];

for (let [index, nom] of nomsPerIndex.entries()) {

    console.log(`Index: ${index}, Nom: ${nom}`);
};

// Exercici 1.7: Promises & Async/Await

// Nivell 1
// Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

// Exercici 2
// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola, mon");
    }, 2000);
})

promesa.then(result => {
    console.log(result);
});





// Exercici 3
// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

const promessa1 = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === "Hola") {
                resolve("Hola");
            } else {

                reject("Error");
            }
        });
    })
}

promessa1("Hola").then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

// Exercici 4
// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
// ++ Nivell 2

// Exercici 5
// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.


const promessa2 = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === "Hola") {
                resolve("Hola");
            } else {
                reject("Error");
            }
        }, 2000);
    });
}

async function fn(input) {
    try {
        let result = await promessa2(input);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
fn("Hola");
fn("Adéu")


// Nivell 3
// Exercici 6
// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 1 resolta després de 2 segons");
    }, 2000);
});


const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 2 resolta després de 3 segons");
    }, 3000);
});


Promise.all([promesa1, promesa2])
    .then((resultats) => {
        console.log(resultats);
    })
    .catch((error) => {
        console.error("S'ha produït un error:", error);
    });
