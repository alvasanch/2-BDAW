/*
Ejercicio 8: Crea una página web con un botón en el que, al pulsarlo, se genere un
array con 10 números aleatorios entre 1 y 50.
A continuación el script pedirá un numero entero positivo al usuario.
Finalmente, el script debe indicar si el numero que ha introducido el usuario se
encuentra en el array o no (Usa una frase coherente, no muestres solo true o false)
b) convierte el código anterior en una función llamada enArray() la cual recibirá
como parámetro el array y el numero a buscar y devolverá true o false en cada caso.
*/
function enArray(array, numero) {
    return array.includes(numero);
}

function generarNumeros() {
    let array = [];

    // Generar 10 números aleatorios entre 1 y 50
    for (let i = 0; i < 10; i++) {
        let numero = parseInt(Math.random() * (50 - 1 + 1)) + 1;
        array.push(numero);
    }

    // Pedir un número al usuario
    let numeroUsuario = parseInt(prompt("Introduce un número entero positivo:"));

    // Comprobar si está en el array
    if (enArray(array, numeroUsuario)) {
        alert("El número " + numeroUsuario + " se encuentra en el array.");
    } else {
        alert("El número " + numeroUsuario + " no se encuentra en el array.");
    }

    console.log(array);
}