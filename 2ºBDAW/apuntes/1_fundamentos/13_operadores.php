<?php
$salto = "<br>";

$num1 = 1;
$num2 = 10;

$num3 = $num2++;
echo $num3.$salto;

$num4 = ++$num2;
echo $num4.$salto;

// EJEMPLO DE DECREMENTO

$num1 = 10;
$num2 = --$num1;
echo $num2;

//EJEMPLO DE SUMA, RESTA, 
//MULTIPLICACION, DIVISION Y DESL RESTO DE LA DIVISION

$num1 = 10;
$num2 = 2;
$num3 = $num2 * $num1;
echo $num3;

// Operadores logico
$num1 = 10;
$num2 = 14;
echo "Es num1 mayor que num2?".($num1<$num2).$salto;

$num3 = 7;
$num4 = 19;
echo "Es num3 igual a num4 Y es num1 menor que num2?: ".(($num3==$num4)&&($num1<$num2)).$salto;

echo "Es num1 mayor o igual a num3 O es num3 menor que num2?".((num1>=3)||($num3<$num2)).$salto;

echo $num2!=$num1;