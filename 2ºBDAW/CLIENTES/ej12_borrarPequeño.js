/*
Ejercicio 12: Dado un array relleno de números enteros, crea una función que devuelva
un nuevo array igual al primero pero eliminando el valor más pequeño del array.
Además, hay que tener en cuenta que:
• No se modifica el array original, es decir, no se puede cambiar de orden los
elementos que queden.
• Si hay varios elementos con el mismo valor, se elimina el primero que aparezca.
• Si el array queda vacío, se devuelve un array vacío.
Ejemplos:
• Para el array: [1,2,3,4,5], la salida debe ser: [2,3,4,5]
• Para el array: [5,3,2,1,4], la salida debe ser: [5,3,2,4]
• Para el array: [2,2,1,2,1], la salida debe ser: [2,2,2,1]
*/
function eliminarMenor(array) {
    if (array.length == 0) {
        return [];
    }

    let menor = array[0];
    let posicionMenor = 0;

    // Buscar el valor menor y su primera posición
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            posicionMenor = i;
        }
    }

    let resultado = [];

    // Crear el nuevo array sin el menor
    for (let i = 0; i < array.length; i++) {
        if (i != posicionMenor) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

let numeros = [2, 2, 1, 2, 1];

let resultado = eliminarMenor(numeros);

console.log(resultado);