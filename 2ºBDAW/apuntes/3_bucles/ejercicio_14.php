<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <table>
    <thead>
        <tr>
            <th>Numero</th>
            <th>Suma divisores</th>
            <th>Clasificacion</th>
        </tr>
    </thead>
    <tbody>
            <?php
        function clasificarNumero(){
            $sumaDivisores = 0;

            for ($i = 2; $i <= 500; $i++){
                
                for($j = 1; $j < $i; $j++){
                    if($i % $j == 0)
                        $sumaDivisores += $j;
                }
                if ($sumaDivisores < $i){
                    $clasificacion = "Deficiente";
                    $color = "coral";
                }
                elseif ($sumaDivisores == $i){
                    $clasificacion = "Perfecto";
                    $color = "green";
                }
                else {
                    $clasificacion = "Abundante";
                    $color = "blue";
                }

                echo "<tr style='background-color: $color;'>";
                echo "<td>$i</td>";
                echo "<td>$sumaDivisores</td>";
                echo "<td>$clasificacion</td>";
                echo "</tr>";
            }
        }
    ?>
    </tbody>
</table>
</body>
</html>


