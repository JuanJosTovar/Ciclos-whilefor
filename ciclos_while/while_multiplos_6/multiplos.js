let contador = 1;
let cantidadMultiplos = 0;

while (contador <= 100) {
    if(contador % 6 == 0){
        console.log("Los multiplos de seis entre 1 y 100 son :",contador);
        cantidadMultiplos++
    }
    contador++;
}
console.log("La cantidad de multiplos de 6 entre 0 y 100 son ",cantidadMultiplos);