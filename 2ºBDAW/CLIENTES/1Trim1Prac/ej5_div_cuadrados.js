/*
Ejercicio 5: Crea un script que pida al usuario un numero entero positivo N mayor a 0.
Hay que controlar que el numero introducido sea correcto (que sea entero, que sea
positivo y que sea un número). Si no es así se volverá a pedir.
A continuación debe realizar lo siguiente:
a) Calcular los divisores del numero N y mostrarlos.
b) Calcular la suma de los cuadrados de los divisores obtenidos en el paso anterior
y mostrarla.
c) Indicar si esa suma es un cuadrado o no (con una frase por pantalla)
Nota: NO se pueden usar arrays en este ejercicio.
*/
// Pedimos un número al usuario
let n;

do {
    n = Number(prompt("Introduce un número entero positivo:"));

    if (!Number.isInteger(n) || n <= 0) {
        alert("Error: debes introducir un número entero positivo");
    }

} while (!Number.isInteger(n) || n <= 0);


// a) Calcular y mostrar los divisores
let divisores = "";
let sumaCuadrados = 0;

for (let i = 1; i <= n; i++) {

    if (n % i == 0) {

        divisores = divisores + i + " ";

        // b) Sumamos el cuadrado del divisor
        sumaCuadrados = sumaCuadrados + i * i;
    }
}

console.log("Los divisores de " + n + " son: " + divisores + "<br>");
console.log("La suma de los cuadrados de los divisores es: " + sumaCuadrados + "<br>");


// c) Comprobar si la suma es un cuadrado perfecto
let raiz = Math.sqrt(sumaCuadrados);

if (Number.isInteger(raiz)) {
    console.log("La suma de los cuadrados es un cuadrado perfecto.");
} else {
    console.log("La suma de los cuadrados NO es un cuadrado perfecto.");
}
