Algoritmo "dia_semana"
Var
   d,cont:real
Inicio
   cont <- 1
   escreval ("N?mero do dia da semana")
   leia (d)
        enquanto (cont=1) faca
            se (d=1) entao
            escreval ("Domingo")
            cont <- (cont+1)
            senao
                 se (d=2) entao
                    escreval ("Segunda-feira")
                    cont <- (cont+1)
                 senao
                      se (d=3) entao
                         escreval ("Ter?a-feira")
                         cont <- (cont+1)
                      senao
                           se (d=4) entao
                              escreval ("Quarta-feira")
                              cont <- (cont+1)
                           senao
                                se (d=5) entao
                                   escreval ("Quinta-feira")
                                   cont <- (cont+1)
                                senao
                                     se (d=6) entao
                                        escreval ("Sexta-feira")
                                        cont <- (cont+1)
                                     senao
                                          se (d=7) entao
                                             escreval ("S?bado")
                                             cont <- (cont+1)
                                          senao
                                               escreval ("Erro, digite novamente:")
                                               leia (d)
                                          fimse
                                     fimse
                                fimse
                           fimse
                      fimse
                 fimse
            fimse
        fimenquanto
Fimalgoritmo