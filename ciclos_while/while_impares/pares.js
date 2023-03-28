let limite = parseInt(prompt("Ingrese el limite que desea"));
let contador = 1;
let cantidadNumeros = 0;

while (contador <= limite) {
    if (contador % 2 != 0){
        console.log(contador, " es impar")
        cantidadNumeros++
    }
    contador++;
}
console.log("La cantidad de impares es ",cantidadNumeros);