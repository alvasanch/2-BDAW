<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h3>Ejercicio 1</h3>
    <p>La biblioteca del insti tiene estos libros: "El Quijote", "1984", "Dune", "El perfume"</p>
    <ol>
        <li>Crear la función "unirConComas($array)", que devuelva un texto con todos los valores separados por ", " (sin coma al final).</li>
        <li>Añade el "Momo", "Drácula" y "La Celestina" al final de la biblioteca</li>
        <li>Se piden prestados los libros "Dune" y "Hamlet". Para cada petición, hay que buscar la posición del libro. Si el libro está en la biblioteca lo vamos a eliminar del array y sacaremos por pantalla el mensaje "Prestado: Dune". Si no tenemos el libro sacamos en el navegador "No disponible". En el caso de cargarnos un libro, tenemos que reestructurar el array para que no haya posiciones que existan.</li>
        <li>Mostrar una lista numerada con todos los libros, el total de libros que hay y, en una lista no ordenada todos los libros de la biblioteca en orden alfabético inverso (de la Z a la A)</li>
    </ol>

    <?php
    $biblioteca  = ["Quijote", "1984", "Dune", "El perfume"];
    array_push($biblioteca, "Momo", "Drácula", "La celestina");
    //$biblioteca[] = "Momo";

    $peticiones = ["Dune", "Hamlet", "El perfume"];

    foreach ($peticiones as $titulo) {
        if (in_array($titulo, $biblioteca)) {  //in_array lo uso para saber si está
            for ($i = 0; $i < count($biblioteca); $i++) {
                if ($titulo == $biblioteca[$i]) {
                    unset($biblioteca[$i]);
                    echo "Prestado: $titulo";
                }
            }
            // $posicion = array_search($titulo, $biblioteca); //en el caso en el que esté, saco su posición
            // unset($biblioteca[$posicion]);
            // echo "Prestado: $titulo";
        } else {
            echo "No disponible";
        }
    }
    echo "<pre>";
    print_r($biblioteca);
    echo "</pre>";
    $biblioteca = array_values($biblioteca); //para "arreglar" el array con las posiciones ordenadas
    echo "<pre>";
    print_r($biblioteca);
    echo "</pre>";


    echo "<ol>";
    for ($i = 0; $i < count($biblioteca); $i++) {
        echo "<li>" . $biblioteca[$i] . "</li>";
    }
    echo "</ol>";

    function unirConComas($array): string
    {
        $solucion = "";
        $primero = true;
        foreach ($array as $elemento) {
            if ($primero) {
                $solucion .= $elemento;
                $primero = false;
            } else {
                $solucion .= ", " . $elemento;
            }
        }
        return $solucion;
    }

    echo unirConComas($biblioteca);
    $copia = $biblioteca;
    rsort($copia);
    echo "<pre>";
    print_r($copia);
    echo "</pre>";
    echo unirConComas($copia);
    ?>
    <h3>Ejercicio 2</h3>
    <p>
        Una tienda informática que guarda su stock en un array asociativo producto->unidades:
        teclado 12, raton 0, monitor 5, webcam 3, altavoz 0.
    </p>
    <ul>
        <li>Crear el array asociativo con el stock original</li>
        <li>Crear una función llamda estadoStock(unidades), que devuelva "Agotado" (0), "Pocas unidades" (1 a 3) y "Disponible" (más de 3)</li>
        <li>Llega un pedido de reposición: 10 ratones, 2 webcams, 7 micrófono. Suma las cantidades a los productos existentes. Si el producto no existía, añadirlo al array del stock de la tienda e indícalo con un echo.</li>
    </ul>

    <?php

    $stock = [
        "teclado" => 12,
        "raton" => 0,
        "monitor" => 5,
        "webcam" => 3,
        "altavoz" => 0
    ];

    function estadoStock($unidades)
    {
        if ($unidades == 0) {
            return "Agotado";
        } elseif ($unidades >= 1 && $unidades <= 3) {
            return "Pocas unidades";
        } else {
            return "Disponible";
        }
    }

    foreach ($stock as $producto => $unidades) {
        echo "$producto: $unidades unidades - ";
        echo estadoStock($unidades) . "<br>";
    }

    $pedido = [
        "raton" => 10,
        "webcam" => 2,
        "microfono" => 7
    ];

    foreach ($pedido as $producto => $cantidad) {

        if (isset($stock[$producto])) {
            $stock[$producto] += $cantidad;
        } else {
            $stock[$producto] = $cantidad;

            echo "Se ha añadido un nuevo producto: $producto<br>";
        }
    }


    foreach ($stock as $producto => $unidades) {
        echo "$producto: $unidades unidades - ";
        echo estadoStock($unidades) . "<br>";
    }

    function ventas(&$stock, $ventas)
    {
        foreach ($ventas as $producto => $cantidad) {

            if (isset($stock[$producto]) && $stock[$producto] >= $cantidad) {
                $stock[$producto] -= $cantidad;
                echo "Venta realizada: $producto ($cantidad unidades)<br>";
            } else {
                echo "Sin stock suficiente de $producto<br>";
            }
        }
    }

    $ventas = [
        "teclado" => 4,
        "altavoz" => 1,
        "monitor" => 5
    ];

    ventas($stock, $ventas);

    foreach ($stock as $producto => $unidades) {
        echo "$producto: $unidades unidades - ";
        echo estadoStock($unidades) . "<br>";
    }

    echo "<h3>Stock final de la tienda</h3>";

    echo "<table>";
    echo "<tr>
        <th>Producto</th>
        <th>Unidades</th>
        <th>Estado</th>
      </tr>";

    $totalUnidades = 0;
    $productoMasUnidades = "";
    $maxUnidades = -1;
    $agotados = [];

    foreach ($stock as $producto => $unidades) {

        echo "<tr>";
        echo "<td>$producto</td>";
        echo "<td>$unidades</td>";
        echo "<td>" . estadoStock($unidades) . "</td>";
        echo "</tr>";

        $totalUnidades += $unidades;

        if ($unidades > $maxUnidades) {
            $maxUnidades = $unidades;
            $productoMasUnidades = $producto;
        }

        if ($unidades == 0) {
            $agotados[] = $producto;
        }
    }

    echo "</table>";

    echo "<p>Total de unidades en stock: $totalUnidades</p>";

    echo "<p>Producto con más unidades: $productoMasUnidades ($maxUnidades unidades)</p>";

    echo "<p>Productos agotados: ";

    if (count($agotados) > 0) {

        foreach ($agotados as $producto) {
            echo "$producto ";
        }
    } else {
        echo "No hay productos agotados";
    }
    echo "</p>";


    ?>
</body>

</html>