Algoritmo "aumento_salario"
Var
salold,salnew,aumento,porc,porccalc:real
Inicio
//Entrada de dados
escreval ("===================================================")
escreval
escreval ("Qual o sal?rio atual do funcion?rio?")
leia (salold)
escreval
escreval ("Quala porcentagem de aumento que ele receber??")
leia (porc)
escreval
//Processamento de dados
porccalc<-(porc/100)
aumento<-(salold*porccalc)
salnew<-(salold+aumento)
//Sa?da de dados
escreval ("O aumento ser? de:",aumento)
escreval ("Resultando em um novo sal?rio de:",salnew)
escreval
escreval ("===================================================")
Fimalgoritmo