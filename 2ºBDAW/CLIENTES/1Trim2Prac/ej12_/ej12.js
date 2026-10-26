/*
12.- Coloca una imagen dentro de un DIV con position: absolute. Crea dos botones:
• Al pulsar uno de ellos la imagen debe moverse 5px hacia la derecha de la
pantalla.
• Al pulsar el otro, la imagen debe moverse 5px hacia la izquierda de la pantalla.
Nota: Recuerda la posicion (0,0) de la pagina web al usar top/left/right/bottom
b) Mejora el ejercicio haciendo que la imagen no pueda salirse de los limites de la
pantalla. Nota: realiza el cálculo a ojo, ya aprenderemos a obtener las medidas de la
página correctamente.
c) Realizar el mismo ejercicio pero esta vez la imagen se moverá hacia la derecha
mientras el ratón esté encima de ella. Coloca un botón para resetear los valores de
posición de la imagen.
*/


let posicion = 100;
let anchoImagen = 100;
let anchoPantalla = 1000;

function moverDerecha() {
    if (posicion + 5 <= anchoPantalla - anchoImagen) {
        posicion = posicion + 5;

        document.getElementById("contenedor").style.left =
            posicion + "px";
    }
}

function moverIzquierda() {
    if (posicion - 5 >= 0) {
        posicion = posicion - 5;

        document.getElementById("contenedor").style.left =
            posicion + "px";
    }
}


window.onload = function(){
    //asigno manejadores de evento
    document.querySelector("button").onclick = function(){
        moverDerecha();
    }
}

function moverIzquierda(){
    let caja = document.querySelector("div");
    const salto = 50;

    //obtendo el valor de left

    let pos = parseInt(caja.style.left);

    if(pos-salto > 0)
        //actualizo valor de left
        caja.style.setProperty("left", (pos+salto)+"px");
    else{
        caja.style.setProperty("left", "0px");       
    }
}

