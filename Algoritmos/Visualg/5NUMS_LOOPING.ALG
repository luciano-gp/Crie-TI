Algoritmo "5nums_looping"
Var
n:real
cn,cont:inteiro
Inicio
cont <- 1
cn <- 0
enquanto (cont<=5) faca
escreval ("Digite um n?mero:")
leia (n)
se (n>=1200) e (n<=3000) entao
   escreval ("Este n?mero esta na faixa de 1200 a 3000")
   cn <- (cn+1)
senao
     escreval ("Este n?mero n?o esta na faixa de 1200 a 3000")
fimse
cont <- (cont+1)
fimenquanto
escreval
escreval (cn," n?meros est?o na faixa de 1200 a 3000")
Fimalgoritmo