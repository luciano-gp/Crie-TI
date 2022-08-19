Algoritmo "01_exercicio"
Var
aa,an,id:inteiro
Inicio
// Entrada de dados
escreval ("Qual o ano do seu nascimento?")
leia (an)
escreval ("Qual o ano atual?")
leia (aa)
// Processamento de dados
id <- (aa-an)
// Saída de dados
se (id>=16) entao
escreval ("Você pode votar nestas eleições")
senao
escreval ("Você ainda não pode votar nestas eleições")
fimse
Fimalgoritmo