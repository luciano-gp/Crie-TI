Algoritmo "desv_desenc"
Var
novosal,sal:real
Inicio
escreval ("Qual é o salário atual?")
leia (sal)
se (sal<800) entao
   novosal<-sal*1.15
senao
     se (sal<=1200) entao
        novosal<-sal*1.10
     senao
          novosal<-sal*1.05
     fimse
fimse
escreval ("Salário reajustado: R$",novosal)
Fimalgoritmo