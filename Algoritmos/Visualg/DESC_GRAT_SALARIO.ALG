Algoritmo "desc_grat_salario"
Var
salbase,grat,imposto,salfinal:real
Inicio
//Entrada de dados
escreval ("===================================================")
escreval
escreval ("Qual o sal?rio base do funcion?rio?")
leia (salbase)
escreval
//Processamento de dados
grat<-(salbase*0.05)
imposto<-(salbase*0.07)
salfinal<-(salbase+grat-imposto)
//Sa?da de dados
escreval ("O sal?rio a receber do funcion?rio ?:R$",salfinal)
escreval
escreval ("===================================================")
Fimalgoritmo