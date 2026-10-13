/*
Ejercicio 14: Dado un array de números enteros (cualquier longitud del array),
devuelva la suma mas grande entre dos números adyacentes.
Ejemplo:
let numeros=[2,4,1,5,6,3]
Resultado: 11 //viene de sumar 5 y 6
//Por si no sabes lo que hay que hacer:
//Las sumas de cada par de números adyacentes son:
//2+4 = 6
//4+1 = 5
//1+5 = 6
//5+6 = 11
//6+3 = 9
*/

let numeros = [10,7,6,4,1,3];

function sumaMayor(numeros) {
    let mayor = numeros[0] + numeros[1];

    for (let i = 1; i < numeros.length - 1; i++) {
        let suma = numeros[i] + numeros[i + 1];
        console.log (suma);
        if (suma > mayor) {
            mayor = suma;
        }
    }

    return mayor;
}

console.log (sumaMayor(numeros));