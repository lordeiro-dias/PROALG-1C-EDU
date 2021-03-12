Algoritmo "CONVERSAO DOLAR"


Var
// Seção de Declarações das variáveis 

valor_prod_dolar,valor_prod_reais,cotacao:real

Inicio
escreval("Digite o valor em reais do produto: ")
leia(valor_prod_reais)
escreval("Digite a cotação atual do dólar: ")
leia(cotacao)

valor_prod_dolar <- valor_prod_reais/cotacao

escreval("O valor convertido é de: ",valor_prod_dolar)

Fimalgoritmo