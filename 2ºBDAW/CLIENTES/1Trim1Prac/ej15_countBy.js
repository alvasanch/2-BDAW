/*
Ejercicio 9: Crea una función llamada countBy la cual recibirá dos números enteros
positivos: X e Y. Esta función debe devolver lo siguiente:
• Si alguno de los números es negativo devolverá un array vacío.
• Si no, devolverá con array con los Y primeros múltiplos de X empezando por el
1 (incluido)
*/
let num1, num2;

function countBy (num1, num2){
    let resultado = [];
    if(num1 < 0 || num2 <0){
        return $resultado;
    }
    else{
        for (let i = 1; i <= num2; i++) {
            resultado.push(num1 * i);
        }
    }
    return resultado;
}
console.log(countBy(2,5));
