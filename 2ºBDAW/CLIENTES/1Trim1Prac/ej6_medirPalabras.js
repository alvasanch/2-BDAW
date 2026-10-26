/*
Ejercicio 6: Crea un script que pida al usuario una cadena y, a continuación, devuelva
el carácter central de la palabra. Si la longitud de la palabra es impar, devuelve el
carácter del medio. Si la longitud de la palabra es par, devuelve los 2 caracteres del
medio.
*/


let palabra = prompt("Introduce una palabra:");

let longitud = palabra.length;
let medio = Math.floor(longitud / 2);

if (longitud % 2 !== 0) {
    alert("El carácter central es: " + palabra[medio]);
} else {
    alert("Los caracteres centrales son: " + palabra[medio - 1] + palabra[medio]);
}