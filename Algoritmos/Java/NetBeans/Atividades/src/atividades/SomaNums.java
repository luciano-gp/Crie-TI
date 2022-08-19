package atividades;
        
public class SomaNums {

    public static void main(String[] args) {

        int numero = 0;
        int soma = 0;

        while (numero != 1111) {

            numero = Entrada.leiaInt("Digite um número");
            soma += numero;
        }

        System.out.println("A soma dos valores é " + (soma - 1111));
        System.exit(0);
    }
}
