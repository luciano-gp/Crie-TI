Algoritmo "5divisao_looping_repita"
Var
   cn,n:real
   cont:inteiro
Inicio
   cont <- 1
   cn <- 0
   repita
      escreval ("Digite um número:")
      leia (n)
      se (n %5=0) entao
         cn <- cn+n
      fimse
      cont <- (cont+1)
   ate (cont > 10)
   escreval
   escreval (cn," é a soma dos numeros divisiveis por 5")
Fimalgoritmo