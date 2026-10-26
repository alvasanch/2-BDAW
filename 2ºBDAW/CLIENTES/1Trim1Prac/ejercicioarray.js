/*
Crea un boton en HTML y asocia la funcion que hay abajo
    - pide dos numeros enteros (a y b)
    - descubrir cual es el mayor y cual es el menor
    - crea un array con valores qye van desde el menor
    hasta el mayor

    Ejemplo: 
    Menor = 2
    Mayor = 7
    Crea el array [2,3,4,5,6,7]
*/

function crearArray() {
  let n1;
  let n2;

  do {
    n1 = Number(prompt("Introduce un número entero:"));

    if (!Number.isInteger(n1)) {
      alert("Error: debes introducir un número entero");
    }

    n2 = Number(prompt("Introduce un número entero:"));

    if (!Number.isInteger(n2)) {
      alert("Error: debes introducir un número entero");
    }
  } while (!Number.isInteger(n1) || !Number.isInteger(n2));
}

let mayor = Math.max (num1,num2);
let menor = Math.max (num1,num2);

/*
let res = [];
for (let i = menor; i <= mayor; i++){
res.push[i];
}
*/
