<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    //ejercicio 1
    <?php
    echo "<br>";
        $num = 150;
        while ($num >= 0){
            if ($num%2==0 && !($num%6==0)){
                echo "$num ";
            }
            $num--;
        }
        echo "<br>";
    ?>

    //ejercicio 2
    <?php
    echo "<br>";
        $num = 1;
        $cont = 0;
        $suma = 0;
        $ultimo;
        $primero;
        while ($num <= 200){
            if($num%7==0 && !($num%3==0)){
                echo "$num ";
                $cont++;
                $suma += $num;
                $ultimo = $num;
            }
            if ($cont==1){
                $primero = $num;
            }
            $num++;
        }
        echo "<br>Suma: $suma";
        echo "<br>Numero de veces: $cont";
        echo "<br>";
    ?>
</body>
</html>