Algoritmo "05_exercicio"
Var
hr,sal,saltotal:real
Inicio
// Entrada de dados
escreval ("Quantas horas o funcion?rio trabalhou no m?s?")
leia (hr)
escreval ("Qual o sal?rio por hora do funcion?rio?")
leia (sal)
// Processamento de dados
se (hr>160) entao
   saltotal <- (160*sal) + ((hr-160)*sal*1.5)
senao
     saltotal <- (160*sal)
fimse
// Sa?da de dados
escreval ("O funcion?rio receber? R$",saltotal)
Fimalgoritmo