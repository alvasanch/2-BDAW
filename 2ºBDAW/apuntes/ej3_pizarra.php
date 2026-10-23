
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

    <h1>ej3</h1>

    <form action="" method="post">
        <label>Notas</label>
        <input type="text" name="notas">

        <br><br>

        <input type="submit" value="OK">
    </form>

    <?php

    if (isset($_POST["notas"])) {

        $notas = explode(",", $_POST["notas"]);
        $cantidad = count($notas);
        $suma = 0;

        for ($i = 0; $i < $cantidad; $i++) {
            $suma = $suma + $notas[$i];
        }

        $media = $suma / $cantidad;

        sort($notas);

        $menor = $notas[0];
        $mayor = $notas[$cantidad - 1];

        /*
        if ($cantidad % 2 == 0) {
            $posicion = $cantidad / 2;
            $mediana = ($notas[$posicion - 1] + $notas[$posicion]) / 2;
        } else {
            $posicion = (int) ($cantidad / 2);
            $mediana = $notas[$posicion];
        }

        $posicion90 = ceil(0.90 * $cantidad) - 1;
        $percentil90 = $notas[$posicion90];
        */

        echo "Media: " . $media . "<br>";
        echo "Nota mayor: " . $mayor . "<br>";
        echo "Nota menor: " . $menor . "<br>";
       /*
        echo "Mediana: " . $mediana . "<br>";
        echo "Percentil 90: " . $percentil90 . "<br>";
        */
    }

    ?>

</body>
</html>
