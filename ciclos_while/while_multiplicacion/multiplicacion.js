let num1 = parseFloat(prompt("Ingrese un numero"));
let num2 = parseFloat(prompt("Ingrese otro numero"));
let resultado = 0;
let contador = 1;

while (contador <= num2) {
    resultado+=num1;
    contador++;
}
console.log("El resultado de la multiplicacion es ",resultado)