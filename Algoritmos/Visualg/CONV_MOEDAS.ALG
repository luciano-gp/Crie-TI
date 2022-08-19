Algoritmo "conv_moedas"
Var
valor,conv:real
op1,op2:inteiro
moeda:caracter
Inicio
escreval ("Qual o valor a ser convertido?")
leia (valor)
escreval ("Qual a moeda de origem?")
escreval ("(1) Real | (2) Dólar | (3) Euro")
leia (op1)
escreval ("Qual a moeda de destino?")
escreval ("(1) Real | (2) Dólar | (3) Euro")
leia (op2)
se (op1=1) e (op2=2) entao
conv<-(valor/4.77)
moeda<-("$")
senao
     se (op1=1) e (op2=3) entao
     conv<-(valor/5.33)
     moeda<-("€")
     senao
          se (op1=1) e (op2=1) entao
          escreval ("Você está tentando converter real para real")
          fimse
     fimse
fimse
se (op1=2) e (op2=1) entao
conv<-(valor*4.77)
moeda<-("R$")
senao
     se (op1=2) e (op2=3) entao
     conv<-(valor*0.895)
     moeda<-("€")
     senao
          se (op1=2) e (op2=2) entao
          escreval ("Você está tentando converter dólar para dólar")
          fimse
     fimse
fimse
se (op1=3) e (op2=1) entao
conv<-(valor*5.33)
moeda<-("R$")
senao
     se (op1=3) e (op2=2) entao
     conv<-(valor/0.895)
     moeda<-("$")
     senao
          se (op1=3) e (op2=3) entao
          escreval ("Você está tentando converter euro para euro")
          fimse
     fimse
fimse
escreval ("O valor convertido será: ",moeda,conv)
Fimalgoritmo