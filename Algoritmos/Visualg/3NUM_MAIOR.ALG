Algoritmo "3num_maior"
Var
   a,b,c:inteiro
Inicio
   escreval("Insira três números:")
   leia (a)
   leia (b)
   leia (c)
   se (a>b) e (a>c) entao
      escreval ("O maior número inserido foi:",a)
   senao
      se (b>a) e (b>c) entao
         escreval ("O maior número inserido foi:",b)
      senao
         escreval ("O maior número inserido foi:",c)
      fimse
   fimse
Fimalgoritmo