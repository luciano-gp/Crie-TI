Algoritmo "calc_escolha"
Var
   a,b,x:real
   op:real
Inicio
   escreval ("Digite os dois números usados no calculo:")
   leia (a)
   leia (b)
   escreval ("Qual operação deseja realizar?")
   escreval ("(1) média | (2) diferença do maior para o menor")
   escreval ("(3) multiplicação | (4) divisão do 1º pelo 2º")
   leia (op)
   se op=1 entao
      x<-(a+b)/2
      escreval ("Operação 1")
   senao
        se op=2 e (a>b) entao
        x<-a-b
        escreval ("Operação 2")
        senao
             se op=2 e (b>a) entao
             x<-b-a
             escreval ("Operação 2.1")
             senao
             fimse
        fimse
                  se op=3 entao
                  x<-a*b
                  escreval ("Operação 3")
                  senao
                       se op=4 entao
                       x<-a/b
                       escreval ("Operação 4")
                       fimse
                  fimse
        fimse
   escreval ("O resultado é:",x)
Fimalgoritmo
