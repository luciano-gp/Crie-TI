Algoritmo "desc_grat_salario"
Var
salbase,grat,imposto,salfinal:real
Inicio
//Entrada de dados
escreval ("===================================================")
escreval
escreval ("Qual o salário base do funcionário?")
leia (salbase)
escreval
//Processamento de dados
grat<-(salbase*0.05)
imposto<-(salbase*0.07)
salfinal<-(salbase+grat-imposto)
//Saída de dados
escreval ("O salário a receber do funcionário é:R$",salfinal)
escreval
escreval ("===================================================")
Fimalgoritmo