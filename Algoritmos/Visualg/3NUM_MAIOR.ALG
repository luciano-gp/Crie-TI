Algoritmo "3num_maior"
Var
   a,b,c:inteiro
Inicio
   escreval("Insira tr?s n?meros:")
   leia (a)
   leia (b)
   leia (c)
   se (a>b) e (a>c) entao
      escreval ("O maior n?mero inserido foi:",a)
   senao
      se (b>a) e (b>c) entao
         escreval ("O maior n?mero inserido foi:",b)
      senao
         escreval ("O maior n?mero inserido foi:",c)
      fimse
   fimse
Fimalgoritmo