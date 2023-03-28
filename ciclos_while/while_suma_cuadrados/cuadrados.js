let suma = 0;
let contador = 1;
let n = parseInt(prompt("Ingrese el numero que desee "));

while (contador <= n) {
    suma = suma + contador ** 2;
    contador++
}
console.log("La suma de los cuadrados de los numeros entre 1 y ",n,"son ",suma)