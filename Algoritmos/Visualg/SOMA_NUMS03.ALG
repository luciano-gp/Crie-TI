Algoritmo "soma_nums"
Var
n1,n2,soma,sub,divisao,multi:real
op:inteiro
Inicio
//entrada de dados
escreval ("==========================================")
escreval
escreval("Escolha a opera??o que deseja fazer? (1)soma | (2)subtra??o | (3)multiplica??o | (4)divis?o")
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
//sa?da de dados
se op=1 entao
   escreval("A soma dos nums",n1," e ",n2," ?:",soma)
fimse
se op=2 entao
   escreval ("A subtra??o dos nums",n1," e ",n2," ?:",sub)
fimse
se op=3 entao
   escreval ("A multiplica??o dos nums",n1," e ",n2," ?:",multi)
fimse
se op=4 entao
   escreval ("A divis?o dos nums",n1," e ",n2," ?:",divisao)
fimse
escreval
escreval ("==========================================")
Fimalgoritmo