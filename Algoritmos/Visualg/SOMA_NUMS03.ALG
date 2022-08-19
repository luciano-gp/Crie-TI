Algoritmo "soma_nums"
Var
n1,n2,soma,sub,divisao,multi:real
op:inteiro
Inicio
//entrada de dados
escreval ("==========================================")
escreval
escreval("Escolha a operação que deseja fazer? (1)soma | (2)subtração | (3)multiplicação | (4)divisão")
leia (op)
escreval
escreval ("Digite um num:")
leia (n1)
escreval
escreval ("Digite mais um num:")
leia (n2)
escreval
// processamento de dados
soma<-(n1+n2)
sub<-(n1-n2)
divisao<-(n1/n2)
multi<-(n1*n2)
//saída de dados
se op=1 entao
   escreval("A soma dos nums",n1," e ",n2," é:",soma)
fimse
se op=2 entao
   escreval ("A subtração dos nums",n1," e ",n2," é:",sub)
fimse
se op=3 entao
   escreval ("A multiplicação dos nums",n1," e ",n2," é:",multi)
fimse
se op=4 entao
   escreval ("A divisão dos nums",n1," e ",n2," é:",divisao)
fimse
escreval
escreval ("==========================================")
Fimalgoritmo