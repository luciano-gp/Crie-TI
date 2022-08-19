Algoritmo "faixa_etaria"
Var
   c1, c2, c3, c4, c5, cont,idade:inteiro
   p1, p5:real
Inicio
   para cont de 1 ate 8 passo 1 faca
      escreval ("Qual a idade da pessoa ",cont,"?")
      leia (idade)
      se (idade <= 15) entao
         c1 <- (c1 + 1)
      senao
         se (idade >=16) e (idade <= 30) entao
            c2 <- (c2 + 1)
         senao
            se (idade >=31) e (idade <= 45) entao
               c3 <- (c3 + 1)
            senao
               se (idade >=46) e (idade <= 60) entao
                  c4 <- (c4 + 1)
               senao
                  c5 <- (c5 + 1)
               fimse
            fimse
         fimse
      fimse
   fimpara
   p1 <- ((c1 / 8) * 100)
   p5 <- ((c5 / 8) * 100)
   escreval ("Total de pessoas por faixa etária:")
   escreval (c1," - faixa etária 1")
   escreval (c2," - faixa etária 2")
   escreval (c3," - faixa etária 3")
   escreval (c4," - faixa etária 4")
   escreval (c5," - faixa etária 5")
   escreval
   escreval (p1,"% na faixa etária 1")
   escreval (p5,"% na faixa etária 5")
Fimalgoritmo