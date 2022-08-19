Algoritmo "cont_dem_looping"
Var
   id,cm,cf,c30,c60,cont:inteiro
   sx:caracter
Inicio
   cont <- 1
   cm <- 0
   cf <- 0
   c30 <- 0
   c60 <- 0
   enquanto (cont<=15) faca
      escreval ("Digite 'm' se for do sexo masculino ou 'f' se for do sexo feminino")
      leia (sx)
      enquanto (sx<>"m") e (sx<>"f") faca
         escreval ("Erro, digite novamente")
         leia (sx)
      fimenquanto
      escreval ("Qual a sua idade?")
      leia (id)
      escreval
      se (sx="m") entao
         cm <- (cm+1)
      senao
         se (sx="f") entao
            cf <- (cf+1)
         fimse
      fimse
      se (id<=30) entao
         c30 <- (c30+1)
      senao
         se (id>=60) entao
            c60 <- (c60+1)
         fimse
      fimse
      cont <- (cont+1)
   fimenquanto
   escreval
   escreval (cm," pessoas são do sexo masculino")
   escreval (cf," pessoas são do sexo feminino")
   escreval (c30," pessoas tem 30 anos ou menos")
   escreval (c60," pessoas tem 60 anos ou mais")
Fimalgoritmo