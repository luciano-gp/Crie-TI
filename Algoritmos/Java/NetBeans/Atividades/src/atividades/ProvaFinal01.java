/*
Escrever um programa que lê 10 nomes com suas respectivas idades, os armazenando em 2
vetores, sendo um para os nomes e o outro para as idades. Ao final apresente o nome da pessoa
mais velha e o nome da pessoa mais nova. Apresente também os dois vetores.
 */
package atividades;

/**
 * @author lucianoo_gp
 */
public class ProvaFinal01 {
    
    public static void main(String[] args) {
        
        String[] nome = new String[5];
        int[] idade = new int[nome.length];
        
        for (int i = 0; i < nome.length; i++) {
            nome[i] = Entrada.leiaString("Pessoa " + (i + 1));
            idade[i] = Entrada.leiaInt("Idade do(a) " + nome[i]);
        }

        for (int i = 0; i < nome.length; i++) {
            System.out.println(nome[i] + " tem " + idade[i] + " anos");
        }
        
        System.out.println("\n");
        System.out.println(nome[maisVelho(idade)] + " é o(a) mais velho(a)");
        System.out.println(nome[maisNovo(idade)] + " é o(a) mais novo(a)");
        
        System.exit(0);
        
    }
    
    public static int maisVelho(int[] idade) {
        int temp = 0;
        int pont = 0;
        for (int i = 0; i < idade.length; i++) {
            if (idade[i] > temp) {
                temp = idade[i];
                pont = i;
            }
        }
        return pont;        
    }
    
    public static int maisNovo(int[] idade) {
        int temp = 1000;
        int pont = 0;
        for (int i = 0; i < idade.length; i++) {
            if (i == 0) {
                temp = idade[i];
                pont = i;
            } else if (idade[i] < temp) {
                temp = idade[i];
                pont = i;
            }
        }
        return pont;        
    }
    
}
