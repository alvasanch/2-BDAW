/*
Ejercicio 14: Crea una función que reciba un array de valores enteros (positivos y
negativos), y devuelva otro array con la suma parcial de cada elemento del array que se
pasa como parámetro.
Nota: La suma parcial de un elemento del array será la suma de ese elemento y todos los anteriores a él.
Ej: Para el array [1,2,3,4,5,6], el array resultante será [1,3,6,10,15,21]
*/

function sumasParciales(array) {
    let resultado = [];
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
        resultado.push(suma);
    }

    return resultado;
}

let numeros = [1, 2, 3, 4, 5, 6];

let resultado = sumasParciales(numeros);

console.log(resultado);