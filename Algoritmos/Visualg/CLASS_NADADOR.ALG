Algoritmo "class_nadador"
Var
   nome,cat:caractere
   idade:inteiro
Inicio
   escreval ("Qual o nome do(a) nadador(a)?")
   leia (nome)
   escreval
   escreval("Qual a idade do(a) nadador(a)?")
   leia (idade)
   escreval
   se (idade<4) entao
      cat<-("Não possui categoria")
   senao
      se (idade>=5) e (idade<=7) entao
         cat<-("Infantil A")
      senao
         se (idade>=8) e (idade<=11) entao
            cat<-("Infantil B")
         senao
            se (idade>=12) e (idade<=13) entao
               cat<-("Juveni A")
            senao
               se (idade>=14) e (idade<=17) entao
                  cat<-("Juveni B")
               senao
                  se (idade>=18) entao
                     cat<-("Adulto")
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse
   escreval ("Nadador(a) ",nome," está enquadrado na categoria: ",cat)
Fimalgoritmo