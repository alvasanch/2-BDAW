function ejercicio2() {
  let suspensos = 0;
  let aprobados = 0;
  let notables = 0;
  let sobresaliente = 0;

  for (let i = 0; i <= 10; i++) {
    do {
      let n = prompt("Introduce una nota entre 0 y 10:");

      if (n < 0 || n > 10) {
        alert("Error: debes introducir una nota entre 0 y 10:");
      } else if (n < 5) {
        suspensos++;
      } else if (n >= 5 && n < 7) {
        aprobados++;
      } else if (n >= 7 && n < 9) {
        notable++;
      } else sobresaliente++;
    } while (!Number.isInteger(n) || n < 0 || n > 10);
  }
  console.log("Suspensos: " + suspensos);
  console.log("Aprobados: " + aprobados);
  console.log("Notables: " + notables);
  console.log("Sobresalientes: " + sobresaliente);
}

/* ejercicio corregido

function ejercicio2() {
    let suspensos = 0;
    let aprobados = 0;
    let notables = 0;
    let sobresalientes = 0;

    for (let i = 0; i < 10; i++) {

        let n;

        do {
            n = Number(prompt("Introduce una nota entre 0 y 10:"));

            if (!Number.isInteger(n) || n < 0 || n > 10) {
                alert("Error: debes introducir una nota entera entre 0 y 10");
            }

        } while (!Number.isInteger(n) || n < 0 || n > 10);

        if (n < 5) {
            suspensos++;
        } else if (n >= 5 && n < 7) {
            aprobados++;
        } else if (n >= 7 && n <= 8) {
            notables++;
        } else if (n > 9) {
            sobresalientes++;
        }
    }

    alert(
        "Suspensos: " + suspensos +
        "\nAprobados: " + aprobados +
        "\nNotables: " + notables +
        "\nSobresalientes: " + sobresalientes
    );
}
*/