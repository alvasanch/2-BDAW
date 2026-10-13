function ejercicio3(){
let n;
let array = [];

//A

do {
  n = prompt("Introduce un número positivo:");

  if (n < 0) {
    alert("No es un numero positivo, asi quedara el array");
  } else {
    array.push(n);
  }
} while (n < 0);

//B

for (let i = 0; i < array.length; i++) {
  console.log(array[i] + " ");
}

//C
let res = 0;

for (let i = 0; i < array.length; i++) {
  res += array[i];
}

console.log("La suma es: " + res);

//D
let num;
do {
  num = Number(prompt("Introduce un número entero positivo:"));

  if (!Number.isInteger(num) || num <= 0) {
    alert("No es un numero entero positivo");
  }
} while (!Number.isInteger(num) || num <= 0);

//E
let primero;
let ultimo;

for (let i = 0; i < array.length; i++) {
  if (num == array[i]) {
    ultimo = i + 1;
  } else alert("El numero no esta en el array");
}

for (let i = array.length; i >= 0; i--) {
  if (num == array[i]) {
    primero = i + 1;
  } else alert("El numero no esta en el array");
}

console.log ("La primera posicion es: " + primero);
console.log ("la ultima posicion es: " + ultimo);
}

/* ejercicio corregido

function ejercicio3() {

    let n;
    let array = [];

    // A
    do {

        n = Number(prompt("Introduce un número entero positivo:"));

        if (n < 0) {

            alert("Has introducido un número negativo. Se termina el apartado A.");

        } else if (!Number.isInteger(n)) {

            alert("Debes introducir un número entero.");

        } else if (n > 0) {

            array.push(n);

        }

    } while (n >= 0);


    // B
    for (let i = 0; i < array.length; i++) {

        console.log(array[i]);

    }


    // C
    let res = 0;

    for (let i = 0; i < array.length; i++) {

        res += array[i];

    }

    console.log("La suma es: " + res);


    // D
    let num;

    do {

        num = Number(prompt("Introduce un número entero positivo:"));

        if (!Number.isInteger(num) || num <= 0) {

            alert("No es un número entero positivo.");

        }

    } while (!Number.isInteger(num) || num <= 0);


    // E
    let primero = -1;
    let ultimo = -1;

    // Buscar la primera aparición
    for (let i = 0; i < array.length; i++) {

        if (num == array[i] && primero == -1) {

            primero = i;

        }

    }

    // Buscar la última aparición
    for (let i = 0; i < array.length; i++) {

        if (num == array[i]) {

            ultimo = i;

        }

    }

    if (primero == -1) {

        console.log("El número no está en el array.");

    } else {

        console.log("La primera posición es: " + primero);
        console.log("La última posición es: " + ultimo);

    }

}
*/