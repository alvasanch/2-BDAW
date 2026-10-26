/*
4.- Crea una galería de fotos (al menos 5 fotos) que posea un botón para avanzar y otro
para retroceder.
• El botón para avanzar hará que se muestre la siguiente foto cada vez que se
pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
• El botón para retroceder hará que se muestre la foto anterior cada vez que se
pulse. Si se llega al principio de la lista de imágenes, el botón deja de funcionar.
b) Mejorar el ejercicio haciendo que el botón correspondiente se deshabilite
cuando se alcanza el final/principio de la lista de fotos.
*/

let fotos = [
    "https://picsum.photos/id/1015/500/300",
    "https://picsum.photos/id/1016/500/300",
    "https://picsum.photos/id/1018/500/300",
    "https://picsum.photos/id/1020/500/300",
    "https://picsum.photos/id/1024/500/300"
];

let indice = 0;

function mostrarFoto() {
    document.getElementById("foto").src = fotos[indice];

    document.getElementById("contador").textContent =
        "Foto " + (indice + 1) + " de " + fotos.length;

    document.getElementById("anterior").disabled = indice === 0;

    document.getElementById("siguiente").disabled =
        indice === fotos.length - 1;
}

function avanzar() {
    if (indice < fotos.length - 1) {
        indice++;
        mostrarFoto();
    }
}

function retroceder() {
    if (indice > 0) {
        indice--;
        mostrarFoto();
    }
}

mostrarFoto();

