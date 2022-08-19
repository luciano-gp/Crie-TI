Algoritmo "04_exercicio"
Var
qntd:inteiro
total:real
Inicio
// Entrada de dados
escreval ("Quantas bananas serão compradas?")
leia (qntd)
// Processamento de dados
se (qntd<12) entao
   total <- (qntd*2.5)
senao
     total <- (qntd*2)
fimse
// Saída de dados
escreval ("O total a pagar por ",qntd," bananas, é de: R$",total)
Fimalgoritmo