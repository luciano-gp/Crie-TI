Algoritmo "valor_carro"
Var
pfabrica,plucro,pimposto,imposto,lucro,final:real
Inicio
//Entrada de dados
escreval ("=================================================")
escreval
escreval ("Qual o preço de fábrica do carro?")
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
//Saída de dados
escreval ("Valor dos impostos: R$",imposto)
escreval ("Lucro do distribuidor: R$",lucro)
escreval ("O valor de venda do veículo é de: R$",final)
escreval
escreval ("=================================================")
Fimalgoritmo