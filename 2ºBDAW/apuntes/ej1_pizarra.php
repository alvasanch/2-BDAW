
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ej Form</title>
</head>
<body>

    <h1>ej1</h1>

    <form action="" method="post">
        <label>Numeros</label>
        <input type="text" name="numeros">

        <br><br>

        <label>Orden</label>
        <input type="text" name="orden">

        <br><br>

        <input type="submit" value="OK">
    </form>

    <?php
/*
    if (isset($_POST["numeros"]) && isset($_POST["orden"])) {

        $numeros = explode(",", $_POST["numeros"]);
        $orden = ($_POST["orden"]);

        if ($orden == "asc") {
            sort($numeros);
            echo implode(", ", $numeros);
        } else ($orden == "desc") {
            rsort($numeros);
            echo implode(", ", $numeros);
        }

    }
*/
    ?>

</body>
</html>