//1- FUNÇÃO SEM PARAMETROS E SEM RETORNO

    function roberto(){
        console.log("Good morning, Sir");
    }

   




//2- FUNÇÃO SEM PAREMETROS E COM RETORNO

    function teste2(){
        var frase = "another frase";
        return frase;
    }

    var resultado = teste2();

//3- FUNÇÃO COM PARAMETROS E SEM RETORNO

function muda_texto(texto){
    document.getElementById("paragrafo").innerHTML = texto;            


}


//4- FUNÇÃO COM PARAMETROS E COM RETORNO

var num1 = 10;
var num2 = 20;

function soma(num1,num2){
    var soma = num1 + num2;
    return soma;

}

var total = soma(num1,num2);

console.log('O primeiro numero é: ' + num1)
console.log('O segundo numero é: ' + num2)
console.log('A soma total é: ' + total);