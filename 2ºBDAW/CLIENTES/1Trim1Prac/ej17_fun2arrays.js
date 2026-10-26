/*
Ejercicio 11: Escriba una función que reciba dos arrays y devuelva un nuevo array con
los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
array). El orden debe ser: primero los que están en el primer array y luego los que están
en el segundo.
Ejemplos:
[1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"]
[77, "ciao"] y [78, 42, "ciao"]) ==> [77, 78, 42]
[1, 2, 3, 3] y [3, 2, 1, 4, 5, 4]) ==> [4,5]
*/
function elementosUnicos(array1, array2) {
    let resultado = [];
    let todos = array1.concat(array2);

    for (let i = 0; i < todos.length; i++) {
        let veces = 0;

        for (let j = 0; j < todos.length; j++) {
            if (todos[i] === todos[j]) {
                veces++;
            }
        }

        if (veces === 1) {
            resultado.push(todos[i]);
        }
    }

    return resultado;
}

console.log (elementosUnicos([1,2,3,4], [2,4,6,8]));