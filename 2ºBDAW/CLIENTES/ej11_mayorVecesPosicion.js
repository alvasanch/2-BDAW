/*
Ejercicio 11: Escribe un programa que pida 10 números enteros y los almacene en un
array. A continuación, debe averiguar:
• el valor máximo de ese array.
• el número de veces que aparece.
• Las posiciones en las que aparece.
Ejemplo: [7,10,143,10,52,143,72,10,143,7]
El valor máximo es el 143
Aparece 3 veces
Posiciones: 2,5,8
*/
let numeros = [];

// Pedimos 10 números
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Introduce el número " + (i + 1) + ":"));
    numeros.push(numero);
}

// Buscamos el valor máximo
let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}

// Contamos cuántas veces aparece y guardamos las posiciones
let contador = 0;
let posiciones = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == maximo) {
        contador++;
        posiciones.push(i);
    }
}

// Mostramos los resultados
alert("El valor máximo es el " + maximo +
      "\nAparece " + contador + " veces" +
      "\nPosiciones: " + posiciones);

console.log(numeros);