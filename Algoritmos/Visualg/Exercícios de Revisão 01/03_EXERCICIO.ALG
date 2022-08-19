Algoritmo "03_exercicio"
Var
b,n,v,total:inteiro
pb,pn,pv:real
Inicio
// Entrada de dados
escreval ("Quantos votos válidos tivemos na eleição?")
leia (v)
escreval ("Quantos votos em branco tivemos na eleição?")
leia (b)
escreval ("Quantos votos nulos tivemos na eleição?")
leia (n)
// Processamento de dados
total <- (v+b+n)
pb <- ((b/total)*100)
pn <- ((n/total)*100)
pv <- ((v/total)*100)
// Saída de dados
escreval ("Tivemos um total de ",total," votos")
escreval ("Sendo: ")
escreval (pv,"% de votos válidos")
escreval (pb,"% de votos em branco")
escreval (pn,"% de votos nulos")
Fimalgoritmo