Algoritmo "CONVERSAO DOLAR"


Var
// Se��o de Declara��es das vari�veis 

valor_prod_dolar,valor_prod_reais,cotacao:real

Inicio
escreval("Digite o valor em reais do produto: ")
leia(valor_prod_reais)
escreval("Digite a cota��o atual do d�lar: ")
leia(cotacao)

valor_prod_dolar <- valor_prod_reais/cotacao

escreval("O valor convertido � de: ",valor_prod_dolar)

Fimalgoritmo