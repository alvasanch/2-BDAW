function apartado1() {
  let tabla = document.querySelector("table");

    let nuevaAnchura = parseInt(prompt("Dame nueva anchura: "));
    let nuevaAltura = parseInt(prompt("Dame nueva altura: "));

    tabla.width = nuevaAnchura+"px";
    tabla.setAttribute("height", nuevaAltura+"px");
}



