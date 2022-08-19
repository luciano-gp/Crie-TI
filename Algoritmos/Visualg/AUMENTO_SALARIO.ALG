Algoritmo "aumento_salario"
Var
salold,salnew,aumento,porc,porccalc:real
Inicio
//Entrada de dados
escreval ("===================================================")
escreval
escreval ("Qual o salário atual do funcionário?")
leia (salold)
escreval
escreval ("Quala porcentagem de aumento que ele receberá?")
leia (porc)
escreval
//Processamento de dados
porccalc<-(porc/100)
aumento<-(salold*porccalc)
salnew<-(salold+aumento)
//Saída de dados
escreval ("O aumento será de:",aumento)
escreval ("Resultando em um novo salário de:",salnew)
escreval
escreval ("===================================================")
Fimalgoritmo