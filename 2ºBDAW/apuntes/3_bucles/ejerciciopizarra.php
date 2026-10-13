/*
1. ****|***|**|*
2. ****
   ***
   **
   *
*/
//2
<?php
for ($i=1; $i >= 4 ; $i++) {
    for ($j=$i; $j <= 4 ; $j++) { 
        echo "*";
    } 
    echo "<br>";
}
?>

<?php
function cifrasPares($num) {

$pares = 0;
    while ($num > 0) {

        $cifra = $num % 10;

        if($cifra % 2 == 0){
            $pares++;
        }
        $num = intval($num/10);
    }
    return $pares;
}
?>