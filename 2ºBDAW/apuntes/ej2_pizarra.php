
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

    <h1>ej2</h1>

    <form action="" method="post">
        <label>Animales</label>
        <input type="text" name="animales">

        <br><br>

        <input type="submit" value="OK">
    </form>

    <?php

    if (isset($_POST["animales"])) {

        $animales = explode(",", $_POST["animales"]);

        print_r($animales);

    }

    ?>

</body>
</html>
