/*
Ejercicio 15: Define un array con los siguientes colores: red, yellow, green,
white, blue, brown, pink y black. A continuación crea un generador aleatorio de
banderas:
1. Se pide el numero de franjas de va a tener la bandera (entre 1 y 5).
2. El programa obtiene de forma aleatoria 5 colores del array.
3. Usando document.write, crea una tabla de una fila y tantas columnas como
colores tenga la bandera generada. Usa el atributo style para rellenar el fondo de
cada celda del color adecuado.
a) En el paso 2 se pueden repetir colores en la bandera.
b) en el paso 2 NO se pueden repetir colores en la bandera.
c) En el paso 2 se pueden repetir colores mientras no sean consecutivos (es decir,
no puede haber dos franjas juntas con el mismo color)
*/

let colores = [
    "red",
    "yellow",
    "green",
    "white",
    "blue",
    "brown",
    "pink",
    "black"
];

let franjas;

do {
    franjas = Number(prompt("Introduce el número de franjas (1-5):"));

    if (!Number.isInteger(franjas) || franjas < 1 || franjas > 5) {
        alert("Error: debes introducir un número entre 1 y 5");
    }

} while (!Number.isInteger(franjas) || franjas < 1 || franjas > 5);


document.write("<table><tr>");

for (let i = 0; i < franjas; i++) {

    let posicion = parseInt(Math.random() * colores.length);

    document.write(
        "<td style='background-color:" + colores[posicion] +
        "; width:100px; height:100px'></td>"
    );
}

document.write("</tr></table>");