Algoritmo "conv_medidas"
Var
pe,jarda,milha,polegada:real
Inicio
//Entrada de dados
escreval ("=============================================")
escreval
escreval ("Este ? um conversor de pes para jardas, polegadas e milhas")
escreval ("Qual ? a medida em pes?")
leia (pe)
escreval
//Processamento de dados
jarda<-(pe/3)
polegada<-(pe*12)
milha<-(jarda/1760)
//Sa?da de dados
escreval (jarda," Jardas")
escreval (polegada," Polegadas")
escreval (milha," Milhas")
escreval
escreval ("=============================================")
Fimalgoritmo