var salario_inicial;
var salario_ajustado;
var ajuste;

ajuste=parseFloat(ajuste);
salario_inicial=parseFloat(prompt("Ingrese su salario"));

if (salario_inicial<1300606) {
    ajuste=salario_inicial*0.15
} else {
    ajuste=0
}

slario_ajustado=ajuste+salario_inicial;

alert("Su salario ajustado es: " +slario_ajustado)
console.log("Su salario con ajuste es igual a "+ salario_ajustado)