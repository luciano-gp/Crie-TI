Algoritmo "media_alunos"
Var
n1,n2,n3,media:real
nome,disciplina:caractere
Inicio
//entrada de dados
escreval ("==========================================")
escreval
escreval ("Qual o nome do aluno?")
leia (nome)
escreval
escreval ("Qual a disciplina?")
leia (disciplina)
escreval
escreval ("Primeira nota do aluno:")
leia (n1)
escreval
escreval ("Segunda nota do aluno:")
leia (n2)
escreval
escreval ("Terceira nota do aluno:")
leia (n3)
escreval
// processamento de dados
media<-((n1+n2+n3)/3)
//saída de dados
escreval ("A média do aluno ",nome," na disciplina de",disciplina," foi de",media," pontos.")
escreval
se media>=7 entao
   escreval ("PARABÉNS, APROVADO!!")
            senao
            escreval ("REPROVADO")
fimse
escreval
escreval ("==========================================")
Fimalgoritmo