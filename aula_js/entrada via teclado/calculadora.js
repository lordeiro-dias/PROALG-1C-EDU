var num1 = parseInt(prompt("Digite o primeiro número:"));
var num2 = parseInt(prompt("Digite o segundo número:"));

var soma = num1 + num2;
var divisao = num1 / num2;
var mult = num1 * num2;
var subt = num1 - num2;

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("soma").innerHTML = soma;
document.getElementById("divisao").innerHTML = divisao;
document.getElementById("sub").innerHTML = subt;
document.getElementById("mult").innerHTML = mult;


//console.log(soma);
//alert(soma);