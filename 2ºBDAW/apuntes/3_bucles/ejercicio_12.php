<?php
function chungo($n) {
    for ($i = 0; $i < $n; $i++) {
        for ($j = 0; $j < $n; $j++) {
            if($i==$j && $j==$n-$i-1)
                echo " x ";
            elseif ($i == $j) 
                echo " \ ";
            elseif($j==$n-$i-1)
                echo " / ";
            elseif($i>$j && $j<$n-$i-1)
                echo " + ";
            elseif($i<$j && $j>$n-$i-1)
                echo " - ";
            elseif($i>$j)
                echo " 1 ";
            else
                echo " 2 ";
        }
        echo "<br>";
    }
}

chungo(23);
?>