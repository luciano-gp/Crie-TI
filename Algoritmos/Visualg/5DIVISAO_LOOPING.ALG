Algoritmo "5divisao_looping"
Var
cn,n:real
cont:inteiro
Inicio
cont <- 1
cn <- 0
enquanto (cont<=10) faca
escreval ("Digite um n?mero:")
leia (n)
se (n %5=0) entao
   cn <- cn+n
fimse
cont <- (cont+1)
fimenquanto
escreval
escreval (cn," ? a soma dos numeros divisiveis por 5")
Fimalgoritmo