/*
Ejercicio 13: Crea una página web con un solo botón en el que, al pulsarlo, le pida al
usuario dos números enteros positivos. A continuación el script debe averiguar cual de
los dos números es el mayor y cual es el menor.
Hecho eso, debe crear un array y rellenarlo con números que vayan desde el menor
valor hasta el mayor valor (ambos incluidos).
Ejemplo: Para los valores 2 y 7, el array que se debe generar es: [2,3,4,5,6,7]
*/
function generarArray() {
    let numero1 = parseInt(prompt("Introduce el primer número entero positivo:"));
    let numero2 = parseInt(prompt("Introduce el segundo número entero positivo:"));

    let menor;
    let mayor;

    // Averiguar cuál es el menor y cuál es el mayor
    if (numero1 < numero2) {
        menor = numero1;
        mayor = numero2;
    } else {
        menor = numero2;
        mayor = numero1;
    }

    let array = [];

    // Rellenar el array desde el menor hasta el mayor
    for (let i = menor; i <= mayor; i++) {
        array.push(i);
    }

    console.log(array);
    alert("El array generado es: " + array);
}