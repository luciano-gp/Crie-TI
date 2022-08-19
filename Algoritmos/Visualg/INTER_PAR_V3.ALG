Algoritmo "inter_par_v3"
Var
a,b:inteiro
Inicio
escreval ("Digite um intervalo de números")
leia (a)
leia (b)
enquanto (a>=b) faca
         se (b mod 2=0) entao
            escreval (b)
         fimse
         b <- (b+1)
fimenquanto
enquanto (b>=a) faca
         se (a mod 2=0) entao
         escreval (a)
         fimse
         a <- (a+1)
fimenquanto
Fimalgoritmo