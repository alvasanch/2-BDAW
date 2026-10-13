<?php
$dia = "lunes";

switch ($dia){
    case "lunes":
        echo "Me encantan los lunes";
        break;
    case "martes":
        echo "Me encantan los martes";
        break;
    case "miercoles":
        echo "Me encantan los miercoles";
        break;
    case "jueves":
        echo "Me encantan los jueves";
        break;
    case "viernes":
        echo "Me encantan los viernes";
        break;
    case "finde":
        echo "VAMOOOOOOO";
        break;
    default:
        echo "Dia de la semana invalido";
}

$num1 = 1;
$num2 = 2.5;

switch (true){
    case ($num1 >= $num2) || ($num2 <= 2):
        echo "caso 1";
        break;
    case ($num1 < $num2) && ($num2 == ((5*$num1)/2)):
        echo "caso 2";
        break;
    default:
        echo "no se cumple ninguna condicion";
}