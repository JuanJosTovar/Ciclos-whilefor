let limite = parseInt(prompt("Ingrese un numero natural"));
let contador = 1;
let suma = 0;

while (contador <= limite) {
    suma = contador + suma;
    contador++
}
console.log("La suma de los nmeros naturales hasta el ",limite,"es",suma)