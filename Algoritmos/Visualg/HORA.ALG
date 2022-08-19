Algoritmo "hora"
Var
   h1,m1,s1,h2,m2,s2,op:inteiro
   d:real
Inicio
   escreval ("Digite a hora, minuto e segundo do início da ocorrência")
   leia (h1)
   leia (m1)
   leia (s1)
   escreval
   escreval ("Digite a hora, minuto e segundo do final da ocorrência")
   leia (h2)
   leia (m2)
   leia (s2)
   escreval
   escreval ("Você deseja ver a duração em:")
   escreval ("1 - Horas")
   escreval ("2 - Minutos")
   escreval ("3 - Segundos")
   leia (op)
   escreval
   se (op=1) entao
      d <- ((h2)+(m2/60)+(s2/3600))-((h1)+(m1/60)+(s1/3600))
      escreval ("O total em horas foi de: ",d,"hrs")
   senao
        se (op=2) entao
           d <- ((h2*60)+(m2)+(m2/60)-(h1*60)+(m1)+(m2/60))
           escreval ("O total em minutos foi de: ",d,"min")
        senao
             se (op=3) entao
                d <- ((h2*3600)+(m2*60)+(s2))-((h1*3600)+(m1*60)+(s1))
                escreval ("O total em segundos foi de: ",d,"seg")
             fimse
        fimse
   fimse

           


Fimalgoritmo