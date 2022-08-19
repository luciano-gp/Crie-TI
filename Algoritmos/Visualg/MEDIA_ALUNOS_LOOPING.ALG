Algoritmo "media_alunos_looping"
Var
n1,n2,n3,media,mediageral,somamedia:real
nome:caractere
cont,qntd,contmedia:inteiro
Inicio
escreval ("Quantos estudantes fazem parte da turma?")
leia (qntd)
cont <- 1
somamedia <- 0
enquanto (cont<=qntd) faca
//entrada de dados
escreval ("==========================================")
escreval
escreval ("Qual o nome do estudante ",cont,"?")
leia (nome)
escreval
escreval ("Primeira nota do estudante:")
leia (n1)
escreval
escreval ("Segunda nota do estudante:")
leia (n2)
escreval
escreval ("Terceira nota do estudante:")
leia (n3)
escreval
// processamento de dados
media<-((n1+n2+n3)/3)
//saída de dados
se media>=7 entao
   escreval ("O estudante ",nome," foi APROVADO com média de ",media," pontos")
senao
     se media<=4 entao
     escreval ("O estudante ",nome," foi REPROVADO com média de ",media," pontos")
     senao
     escreval ("O estudante ",nome," esta em EXAME com média de ",media," pontos")
     fimse
fimse
escreval
escreval ("==========================================")
cont <- (cont+1)
somamedia <- (somamedia+media)
se (media>=8) entao
   contmedia <- contmedia+1
fimse
fimenquanto
mediageral <- (somamedia/(cont-1))
escreval
escreval ("A média da turma foi de ",mediageral," pontos")
escreval
escreval ("Quantidade de estudantes com média 8 ou mais:")
escreval (contmedia," estudante(s)")
escreval ("==========================================")
Fimalgoritmo