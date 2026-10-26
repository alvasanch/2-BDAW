/*
Ejercicio 13: Crea un script que filtre un alista de nombres y devuelva otra lista solo
con los que son amigos tuyos.
Como eres una persona muy “especial”, tú solo eres amigo/a de aquellas personas cuyo
nombre se componga exactamente de 4 letras.
Ejemplo:
Entrada=["Manu","Alberto","Marcos","Javi","Ricardo","Gabi"]
Salida = ["Manu", "Javi", "Gabi"]
Entrada = ["María", "Laura", "Lucía", "Susana"]
Salida = []
Suponemos que los array son correctos y tienen nombres.
Importante: hay que respetar el orden de los nombres en la salida.
*/


let nombres = ["Manu", "Alberto", "Samu", "Veneco", "Joselu", "Iker"];

function amigos(nombres) {
    let resultado = [];

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length == 4) {
            resultado.push(nombres[i]);
        }
    }

    return resultado;
}

console.log(amigos(nombres));