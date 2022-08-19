Algoritmo "media_alunos_desenc"
Var
n1,n2,n3,media:real
nome,disciplina:caractere
Inicio
//entrada de dados
escreval ("==========================================")
escreval
escreval ("Qual o nome do estudante?")
leia (nome)
escreval
escreval ("Qual a disciplina?")
leia (disciplina)
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
   escreval ("O estudante ",nome," foi APROVADO na disciplina de ",disciplina)
senao
     se media<=4 entao
     escreval ("O estudante ",nome," foi REPROVADO na disciplina de ",disciplina)
     senao
     escreval ("O estudante ",nome," esta em EXAME na disciplina de ",disciplina)
     fimse
fimse
escreval
escreval ("==========================================")
Fimalgoritmo