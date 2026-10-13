<?php
$salto = "<br>";
//CONSTANTES

//definicion de pi
define("numPI", 3.1416);

//echo $numPI; el dolar solo se utiliza para variables, no constantes
echo numPI;

//TIPOS DE DATOS

$var1 = 1;
echo "Esto es un integer: ".$var1.$salto;

$var2 = 1.1;
echo "Esto es un float: ".$var2.$salto;

$var3 = true;
echo "Esto es un booleano: ".$var3.$salto;

$var4 = "Me encanta jugar al GTA6";
echo "Esto es un string: ".$var4.$salto;

$var5 = NULL;
echo "Esto es un nulo: ".$var5.$salto;

// esta funcion no solamente me saca el tipo y su valor sino que 
//tambien me la muestra por pantalla
var_dump($var1);
var_dump($var2);
var_dump($var3);
var_dump($var4);
var_dump($var5);

echo $salto;

//CONVERSION DE TIPOS DE DATOS

// de X a String

$numero = 12.1;
var_dump($numero);
echo $salto;
$numero = strval($numero);
var_dump($numero);

// de X a int

//intval()

$decimal = 12.99999;
$cadena = "12.1";
var_dump(intval($decimal));
var_dump(intval($cadena));

echo $salto;

//de X a float

//floatval()