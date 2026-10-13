function ejercicio1() {
  let n;

  do {
    n = Number(prompt("Introduce un número entero positivo:"));

    if (!Number.isInteger(n) || n <= 0) {
      alert("Error: debes introducir un número entero positivo");
    }
  } while (!Number.isInteger(n) || n <= 0);

  let res;

  res = n * 3.4;
  alert(n + " Medacines equivalen a " + res + " Euros");
}

/* codigo corregido 
function ejercicio1() {
    let n;

    do {
        n = Number(prompt("Introduce un número entero positivo:"));

        if (!Number.isInteger(n) || n <= 0) {
            alert("Error: debes introducir un número entero positivo");
        }

    } while (!Number.isInteger(n) || n <= 0);

    let res = n * 3.4;

    alert(n + " Medacines equivalen a " + res + " Euros");
}
    */