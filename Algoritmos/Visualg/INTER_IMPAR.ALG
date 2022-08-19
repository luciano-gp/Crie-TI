Algoritmo "inter_impar"
Var
a,b,n:inteiro
Inicio
escreval ("Digite um intervalo de números")
leia (a)
leia (b)
se (a<b) entao
n <- b
enquanto (n>=a) e (n<=b) faca
         se (n mod 2<>0) entao
            escreval (n)
         fimse
         n <- (n-1)
fimenquanto
senao
n <- a
enquanto (n>=b) e (n<=a) faca
         se (n mod 2<>0) entao
            escreval (n)
         fimse
         n <- (n-1)
fimenquanto
fimse
Fimalgoritmo