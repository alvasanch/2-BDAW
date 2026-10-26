/*
Ejercicio 10: Dado un array relleno con números positivos y negativos. Crea una
unción que devuelva la suma de todos los valores positivos del array.
Ej: Para el array [2,-8,7,3,-9-3,5], la suma de los valores positivos es: 2+7+3+5= 17
*/
function sumaPositivos(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            suma = suma + array[i];
        }
    }

    return suma;
}

let array = [2, -8, 7, 3, -9, -3, 5];

let resultado = sumaPositivos(array);

console.log("La suma de los valores positivos es: " + resultado);