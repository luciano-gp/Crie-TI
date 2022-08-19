Algoritmo "pesq_merc_looping"
Var
   cont,cm,cf,cs,cn:inteiro
   sx,r:caractere
Inicio
   cont <- 1
   cm <- 0
   cf <- 0
   cs <- 0
   cn <- 0
   enquanto (cont<=10) faca
      escreval ("Qual o seu sexo? (m/f)")
      leia (sx)
      escreval ("Você consumiria o produto 'xxxx'? (s/n)")
      leia (r)
      se (r="s") entao
         cs <- (cs+1)
      senao
         se (r="n") entao
            cn <- (cn+1)
         fimse
      fimse
      se (r="s") e (sx="f") entao
         cf <- (cf+1)
      senao
           se (r="n") e (sx="m") entao
              cm <- (cm+1)
           fimse
      fimse
      cont <- (cont+1)
   fimenquanto
   escreval
   escreval (cs," pessoas consumiriam o produto 'xxxx'")
   escreval (cn," pessoas não consumiriam o produto 'xxxx'")
   escreval (cf," pessoas do sexo feminino usariam o produto")
   escreval (cm," pessoas do sexo masculino não usariam o produto")
Fimalgoritmo