Algoritmo "calc_escolha2"
Var
   a,b,x:real
   op:real
Inicio
   escreval ("Digite os dois n?meros usados no calculo:")
   leia (a)
   leia (b)
   escreval ("Qual opera??o deseja realizar?")
   escreval ("(1) m?dia | (2) diferen?a do maior para o menor")
   escreval ("(3) multiplica??o | (4) divis?o do 1? pelo 2?")
   leia (op)
   se (op=1) entao
      x<-(a+b)/2
      escreval ("Opera??o 1")
   senao
      se (op=2) e (b>a) entao
         x<-(b-a)
         escreval ("Opera??o 2")
      senao
         se (op=2) e (a>b) entao
            x<-(a-b)
            escreval ("Opera??o 2.1")
         senao
            se (op=3) entao
               x<-(a*b)
               escreval ("Opera??o 3")
            senao
               se (op=4) entao
                  x<-(a/b)
                  escreval ("Opera??o 4")
               fimse
            fimse
         fimse
      fimse
   fimse
   escreval ("O resultado ?:",x)
Fimalgoritmo
