Algoritmo "cont_filhos_looping_para"
Var
   nome:caracter
   nf,c1,c2,c3,c4,cont:inteiro
Inicio
   c1 <- 0
   c2 <- 0
   c3 <- 0
   c4 <- 0
   para cont de 1 ate 8 passo 1 faca
      escreval ("Qual seu nome?")
      leia (nome)
      escreval ("Quantos filhos você tem?")
      leia (nf)
      se (nf>=1) e (nf<=3) entao
         c1 <- (c1+1)
      senao
         se (nf>=4) e (nf<=7) entao
            c2 <- (c2+1)
         senao
            se (nf>=8) entao
               c3 <- (c3+1)
            senao
               c4 <- (c4+1)
            fimse
         fimse
      fimse
      cont <- (cont+1)
   fimpara
   escreval
   escreval (c1," pessoas possuem entre 1 e 3 filhos")
   escreval (c2," pessoas possuem entre 4 e 7 filhos")
   escreval (c3," pessoas possuem 8 ou mais filhos")
   escreval (c4," pessoas não possuem filhos")
Fimalgoritmo