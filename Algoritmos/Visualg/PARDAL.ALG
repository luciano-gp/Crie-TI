Algoritmo "pardal"
Var
velms,velkm:real
Inicio
escreval("Digite a velocidade em m/s:")
leia(velms)
velkm<-(velms*3.6)
escreval("Sua velocidade foi: ",velkm,"km/h")
se (velkm>60) e (velkm<=66) entao
escreval("Você excedeu o limite de velocidade!")
senao
     se (velkm>66)entao
     escreval("Receba a multa!")
     fimse
fimse
Fimalgoritmo