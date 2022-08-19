Algoritmo "05_exercicio"
Var
hr,sal,saltotal:real
Inicio
// Entrada de dados
escreval ("Quantas horas o funcionário trabalhou no mês?")
leia (hr)
escreval ("Qual o salário por hora do funcionário?")
leia (sal)
// Processamento de dados
se (hr>160) entao
   saltotal <- (160*sal) + ((hr-160)*sal*1.5)
senao
     saltotal <- (160*sal)
fimse
// Saída de dados
escreval ("O funcionário receberá R$",saltotal)
Fimalgoritmo