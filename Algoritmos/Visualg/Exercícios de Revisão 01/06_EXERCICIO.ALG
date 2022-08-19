Algoritmo "06_exercicio"
Var
a,b,c:real
Inicio
// Entrada de dados
escreval ("Digite 3 valores diferentes:")
leia (a)
leia (b)
leia (c)
// Processamento de dados
// Saída de dados
escreval ("A ordem crescente desses valores é:")
se (a>b) e (a>c) e (b>c) entao
   escreval (c)
   escreval (b)
   escreval (a)
senao
     se (a>b) e (a>c) e (c>b) entao
        escreval (b)
        escreval (c)
        escreval (a)
     senao
          se (b>a) e (b>c) e (a>c) entao
             escreval (c)
             escreval (a)
             escreval (b)
          senao
               se (b>a) e (b>c) e (c>a) entao
                  escreval (a)
                  escreval (c)
                  escreval (b)
               senao
                    se (c>a) e (c>b) e (a>b) entao
                       escreval (b)
                       escreval (a)
                       escreval (c)
                    senao
                         se (c>a) e (c>b) e (b>a) entao
                            escreval (a)
                            escreval (b)
                            escreval (c)
                         fimse
                    fimse
               fimse
          fimse
     fimse
fimse
Fimalgoritmo