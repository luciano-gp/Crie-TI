Algoritmo "valor_carro"
Var
pfabrica,plucro,pimposto,imposto,lucro,final:real
Inicio
//Entrada de dados
escreval ("=================================================")
escreval
escreval ("Qual o pre?o de f?brica do carro?")
leia (pfabrica)
escreval
escreval ("Qual o percentual de lucro do distribuidor?")
leia (plucro)
escreval
escreval ("Qual o percentual de impostos sobre o carro?")
leia (pimposto)
escreval
//Processamento de dados
lucro<-(pfabrica*plucro/100)
imposto<-(pfabrica*pimposto/100)
final<-(pfabrica+imposto+lucro)
//Sa?da de dados
escreval ("Valor dos impostos: R$",imposto)
escreval ("Lucro do distribuidor: R$",lucro)
escreval ("O valor de venda do ve?culo ? de: R$",final)
escreval
escreval ("=================================================")
Fimalgoritmo