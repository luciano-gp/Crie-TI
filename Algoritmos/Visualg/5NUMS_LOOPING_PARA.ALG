Algoritmo "5nums_looping_para"
Var
   n:real
   cn,cont:inteiro
Inicio
   cn <- 0
   para cont de 1 ate 5 passo 1 faca
      escreval ("Digite um n?mero:")
      leia (n)
      se (n>=1200) e (n<=3000) entao
         escreval ("Este n?mero esta na faixa de 1200 a 3000")
         cn <- (cn+1)
      senao
         escreval ("Este n?mero n?o esta na faixa de 1200 a 3000")
      fimse
   fimpara
   escreval
   escreval (cn," n?meros est?o na faixa de 1200 a 3000")
Fimalgoritmo