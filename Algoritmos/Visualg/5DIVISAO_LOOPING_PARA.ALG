Algoritmo "5divisao_looping_para"
Var
   cn,n:real
   cont:inteiro
Inicio
   cn <- 0
   para cont de 1 ate 10 passo 1 faca
      escreval ("Digite um número:")
      leia (n)
      se (n mod 5=0) entao
         cn <- cn+n
      fimse
   fimpara
   escreval
   escreval (cn," é a soma dos numeros divisiveis por 5")
Fimalgoritmo