Algoritmo "5nums_looping_repita"
Var
   n:real
   cn,cont:inteiro
Inicio
   cn <- 0
   cont <- 1
   repita
      escreval ("Digite um número:")
      leia (n)
      se (n>=1200) e (n<=3000) entao
         escreval ("Este número esta na faixa de 1200 a 3000")
         cn <- (cn+1)
      senao
         escreval ("Este número não esta na faixa de 1200 a 3000")
      fimse
      cont <- (cont+1)
   ate (cont > 5)
   escreval
   escreval (cn," números estão na faixa de 1200 a 3000")
Fimalgoritmo