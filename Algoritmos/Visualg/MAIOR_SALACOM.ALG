Algoritmo "maior_salacom"
Var
   l1,l2,c1,c2,a1,a2:real
Inicio
   escreval("Digite a largura da sala 1:")
   leia (l1)
   escreval("Digite o comprimento da sala 1:")
   leia (c1)
   escreval("Digite a largura da sala 2:")
   leia (l2)
   escreval("Digite o comprimento da sala 2:")
   leia (c2)
   a1<-(l1*c1)
   a2<-(l2*c2)
   se (a1>a2) entao
      escreval ("A sala 1 é a maior com ",a1,"m²")
   senao
      se (a2>a1) entao
         escreval ("A sala 2 é a maior com ",a2,"m²")
      senao
         escreval ("Ambas as salas tem a mesma área, ",a1,"m²")
      fimse
   fimse
Fimalgoritmo