/*
Ejercicio 9: Dado un array relleno valores de cualquier tipo. Crea una unción que
devuelva el mismo array con los valores en el orden contrario. Importante: no se puede
usar .reverse()
Ej: Para el array [10,5,”hola”, -9.5], la salida será [-9.5, “hola”,5, 10]
*/
function invertirArray(array) {
    let resultado = [];

    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }

    return resultado;
}

let array = [10, 5, "hola", -9.5];

let resultado = invertirArray(array);

console.log(resultado);