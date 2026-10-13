<?php

echo "Hola mundo<br>";

echo "Me encanta PHP!";

?>

<!-- parte estatica de mi web -->
 <h1>Esto en una intro de mi maravilloso lenguaje de programacion</h1>
 <p>Este texto es puro HTML, es SIEMPRE estatico</p>
 <hr>
 <?php
    $salto = "<br>";
    // Parte dinamica con variables y funciones
    $lenguaje = "PHP";
    $ciclo = 'DAW';
    echo "El lenguaje favorito de todos los niños es: $lenguaje$salto";
    echo "El lenguaje favorito de todos los niños es: ".$lenguaje.$salto;

    //Parte dinamica con una funcion del servidor
    echo "El recreo es a las 11:30 y todavia son las: ".$salto;
    $fecha = date("d/m/Y H:i:s");
    echo $fecha;
?>