function ejercicio4() {
  
  //A

  do {
    let n = prompt("Introduce un número entre 3 y 5, ambos incluidos:");

    if (n < 3 || n > 5) {
      alert("Error: debes introducir un número entre 3 y 5, ambos incluidos:");
    }
  } while (!(n < 3) || !(n > 5));
}


/* ejercicio corregido

function ejercicio4() {

    // A
    let n;

    do {

        n = Number(prompt("Introduce un número entre 3 y 5, ambos incluidos:"));

        if (!Number.isInteger(n) || n < 3 || n > 5) {

            alert("Error: debes introducir un número entero entre 3 y 5.");

        }

    } while (!Number.isInteger(n) || n < 3 || n > 5);


    // B
    let original = [];

    for (let i = 0; i < n; i++) {

        original[i] = [];

        for (let j = 0; j < n; j++) {

            original[i][j] = parseInt(Math.random() * (15 - 5 + 1) + 5);

        }

    }


    // C
    console.log("Matriz ORIGINAL:");

    for (let i = 0; i < original.length; i++) {

        let fila = "";

        for (let j = 0; j < original[i].length; j++) {

            if (original[i][j] < 10) {

                fila += "0" + original[i][j] + " ";

            } else {

                fila += original[i][j] + " ";

            }

        }

        console.log(fila);

    }


    // D
    let suma = 0;

    for (let i = 0; i < original.length; i++) {

        for (let j = 0; j < original[i].length; j++) {

            suma += original[i][j];

        }

    }

    let media = suma / (n * n);

    console.log("La media es: " + media);


    // E
    let pares = 0;

    for (let i = 0; i < original.length; i++) {

        for (let j = 0; j < original[i].length; j++) {

            if (original[i][j] % 2 == 0) {

                pares++;

            }

        }

    }

    console.log("Hay " + pares + " numeros pares en la matriz");


    // F
    let num;

    do {

        num = Number(prompt("Introduce un número entre 1 y " + n + ":"));

        if (!Number.isInteger(num) || num < 1 || num > n) {

            alert("Error: debes introducir un número entre 1 y " + n + ".");

        }

    } while (!Number.isInteger(num) || num < 1 || num > n);


    // Crear una copia de la matriz
    let copia = [];

    for (let i = 0; i < original.length; i++) {

        copia[i] = [];

        for (let j = 0; j < original[i].length; j++) {

            copia[i][j] = original[i][j];

        }

    }


    // Intercambiar la fila indicada
    let filaOriginal = original[num - 1];

    original[num - 1] = copia[num - 1];

    copia[num - 1] = filaOriginal;


    // Mostrar ORIGINAL
    console.log("Matriz ORIGINAL después del intercambio:");

    for (let i = 0; i < original.length; i++) {

        let fila = "";

        for (let j = 0; j < original[i].length; j++) {

            if (original[i][j] < 10) {

                fila += "0" + original[i][j] + " ";

            } else {

                fila += original[i][j] + " ";

            }

        }

        console.log(fila);

    }


    // Mostrar COPIA
    console.log("Matriz COPIA después del intercambio:");

    for (let i = 0; i < copia.length; i++) {

        let fila = "";

        for (let j = 0; j < copia[i].length; j++) {

            if (copia[i][j] < 10) {

                fila += "0" + copia[i][j] + " ";

            } else {

                fila += copia[i][j] + " ";

            }

        }

        console.log(fila);

    }

}
*/