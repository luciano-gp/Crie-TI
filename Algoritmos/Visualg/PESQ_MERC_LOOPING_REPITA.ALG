Algoritmo "pesq_merc_looping_repita"
Var
   cont,cm,cf,cs,cn:inteiro
   sx,r:caractere
Inicio
   cont <- 1
   cm <- 0
   cf <- 0
   cs <- 0
   cn <- 0
   repita
      escreval ("Qual o seu sexo? (m/f)")
      leia (sx)
      escreval ("Voc? consumiria o produto 'xxxx'? (s/n)")
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
   ate (cont > 10)
   escreval
   escreval (cs," pessoas consumiriam o produto 'xxxx'")
   escreval (cn," pessoas n?o consumiriam o produto 'xxxx'")
   escreval (cf," pessoas do sexo feminino usariam o produto")
   escreval (cm," pessoas do sexo masculino n?o usariam o produto")
Fimalgoritmo