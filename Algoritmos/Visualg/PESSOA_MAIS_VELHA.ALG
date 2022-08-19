Algoritmo "pessoa_mais_velha"
Var
n1,n2,n3:caractere
i1,i2,i3:inteiro
Inicio
escreval ("Digite o nome e a idade do participante:")
leia (n1)
leia (i1)
escreval ("Digite o nome e a idade do participante:")
leia (n2)
leia (i2)
escreval ("Digite o nome e a idade do participante:")
leia (n3)
leia (i3)
se (i1>i2) e (i1>i3) entao
escreval ("O participante mais velho é o ",n1," com ",i1," anos")
senao
     se (i2>i1) e (i2>i3) entao
     escreval ("O participante mais velho é o ",n2," com ",i2," anos")
     senao
          se (i3>i2) e (i3>i1) entao
          escreval ("O participante mais velho é o ",n3," com ",i3," anos")
          senao
               escreval ("Error 404 - Pessoa mais velha not found")
          fimse
     fimse
fimse
Fimalgoritmo