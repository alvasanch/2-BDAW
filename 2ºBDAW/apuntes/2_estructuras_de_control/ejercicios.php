<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Ejercicios</h1>
    <h3>Ejercicio 1</h3>
    <p>Crea una función que según la edad pasada como parámetro, imprima por pantalla lo siguiente:
        "Eres menor edad" si tienes menos de 18 años, "Eres adulto" si tienes entre 18 y 65 años,
        "eres un jubilao" si tienes entre 66 y 80 y "eres un anciano" si tienes mas de 80.
        CONTROLAR QUE LA EDAD SEA MAYOR A 0 Y MENOR A 140 AÑOS => SACAR POR PANTALLA "EDAD NO VÁLIDA"</p>
    <?php
    function edad($edad)
    {
        $resultado = match (true) {
            $edad >= 0 && $edad < 18 => "Eres menor edad",
            $edad >= 18 && $edad < 65 => "Eres adulto",
            $edad >= 65 && $edad <= 80 => "Eres un jubilao",
            $edad > 80 && $edad < 140 => "Eres un anciano",
            default => "EDAD NO VALIDA"
        };
        echo $resultado;
    }

    edad(57);

    ?>

    <h3>Ejercicio 2</h3>
    <p>Crear una función haciendo uso de un switch para transformar notas numéricas en string de la siguiente forma:
        si tienes menos de un 5 => "suspenso" si tienes entre un 5 y un 6 => "aprobado", si tienes entre un 7 y un 8 => "notable"
        y si tienes entre un 9 y un 10 => "genio"

        Al llamar a la función, sacará directamente por pantalla el string correspondiente.
    </p>
    <?php
    function nota($nota)
    {
        switch ($nota) {
            case ($nota < 5):
                echo "suspenso";
                break;
            case ($nota >= 5 && $nota < 7):
                echo "aprobado";
                break;
            case ($nota >= 7 && $nota < 8):
                echo "notable";
                break;
            case ($nota >= 9 && $nota <= 10):
                echo "genio";
                break;
        }
    }

    ?>
    <h3>Ejercicio 3</h3>
    <p>Crear una función llamada "calculadora" que tenga 3 parámetros. Dos números decimales y un string. El string contendrá el cálculo
        que se va a hacer con los dos números decimales. Si entra una operación no soportada, la función devolverá un error por pantalla.
        Sino, se devolverá el resultado del cálculo: operaciones: suma, resta, división, módulo y exponente.</p>
    <?php
    function calculadora($num1, $num2, $operacion)
    {
        $operacion = match (true) {
            "suma" => $num1 + $num2,
            "resta" => $num1 - $num2,
            "multiplicacion" => $num1 * $num2,
            "division" => $num1 / $num2,
            default => "No existe la operacion"
        };
    }
    //echo calculadora(1,2,"suma");
    ?>
    <h3>Ejercicio 4</h3>
    <p>
        Crea una función llamada "calcularEnvio(float $peso, bool $express, bool $internacional)" => devuelve un string que determine el tipo de tarifa y el precio en euros usando un match.
    <ol>
        <li>
            Si el envio es internacional y express y el peso es menor o igual a dos kilos => tarifa "express internacional ligero" y el precio es 25€
        </li>
        <li> Si el envío es internacional estándar => tarifa "estándar internacional" y precio 15€
        </li>
        <li> Si el envio nacional y express y pesa 5kilos o menos => tarifa "express nacional" precio 10€
        </li>
        <li> Si el envío nacional estándar => tarifa "estándar nacional" precio 5€
        </li>
        <li> En cualquier otro caso => "resultado no válido"</li>
    </ol>
    </p>
    <?php
    function calcularEnvio(float $peso, bool $express, bool $internacional): string
    {
        return match (true) {
            $internacional && $express && $peso <= 2 => "Tarifa: Express internacional ligero Precio: 25€",
            default => "no hay mas condiciones"
        };
    }
    echo calcularEnvio(2, true, true);
    ?>
    <h3>Ejercicio 5</h3>
    <p>
        Crear la función calcularSuscripcion(string $plan, bool $estudiante, bool $anual)=>string
        Plan => puede ser "basico", "pro", "enterprise"
    <ul>
        <li>Precio base: para basico 10, para pro 30 y para enterprise 75</li>
        <li>Descuentos:

            <ul>
                <li>si es estudiante => 15% descuento</li>
                <li>si pagas anualmente => 20% descuento</li>
            </ul>
        </li>
        <li>La función devolverá "Plan X ---- Total Y€" dentro de un encabezado h4</li>
        <li>Si el plan no está contemplado, se mostrará "Plan no disponible".</li>
    </ul>
    </p>
    <?php
    function calcularSuscripcion(string $plan, bool $estudiante, bool $anual): string
    {
        // Primera parte: Obtener el precio base
        switch ($plan) {
            case "basico":
                $precio = 10;
                break;
            case "pro":
                $precio = 30;
                break;
            case "enterprise":
                $precio = 75;
                break;
            default:
                return "Plan no disponible";
        }
        if ($estudiante) $precio *= 0.85;
        if ($anual) $precio *= 0.8;

        return "Plan: $plan ---- Precio: $precio €";
    }

    echo calcularSuscripcion("basico", 0, 1);

    ?>
    //Ejercicio 6
    //Validacion de fechas: Creaqr una funcion llamada validarFecha() que acepte tres parámetros: el dia, el mes y el año. La funcion devolvera un String informando si la fecha introducida es anterior, posterior o es la fecha actual, Hay que validar que la fecha introducida como parametros sea correcta
    //funciones que tenemos que usar:
    /*
    date(mes dia año) pasar a formato dia
    chekdate (mes dia año) comprueba que el formato de la fecha es correcto
    strtotime (formato date): pasa a segundos la fecha que le metamos como parametro desde 1970
    date ("Y-m-d"): para sacar la fecha actual en formato date */
    <?php
    function validarFecha(int $dia, int $mes, int $anio): string{
        if(!checkdate($mes, $dia, $anio)){
            return "Fecha no valida<br>";
    }
    $fechaIngresada = strtotime("$anio-$mes-$dia");
    $hoy = strtotime(date("Y-m-d"));
    echo "hoy: $hoy<br>";
    ?>
</body>

</html>