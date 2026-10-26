/*
10.- Crea tres DIV de tamaño 100x100px y con un color de fondo diferente cada uno.
Al pasar por encima de alguno de esos DIVs, el color de fondo de la página debe
cambiar al color que tenga el DIV sobre el que está el cursor del ratón.
b) Añade el código necesario para que el color de la página vuelva a su color
original si el cursor del ratón no está encima de ninguno de los DIVs del ejercicio.
*/

window.onload = function () {
  let cuadros = document.getElementsByClassName("cuadro");

  for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].onmouseover = function () {
      document.body.style.backgroundColor = cuadros[i].style.backgroundColor;
    };

    cuadros[i].onmouseout = function () {
      document.body.style.backgroundColor = "white";
    };
  }
};
