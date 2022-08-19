/*
Criar um programa que faça a leitura de 5 números inteiros e os armazene em um vetor.
Apresentar ao final todos os números armazenados no vetor e o menor número juntamente
com seu índice e o maior número com seu índice.
*/
package atividades;

/**
 * @author lucianoo_gp
 */
public class Atividade02_1305 {
    
    public static void main(String[] args) {
        
        int[] vetor = new int[5];
        int numMaior = 0;
        int numMenor = 0;
        int indMaior = 0;
        int indMenor = 0;
        
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = Entrada.leiaInt("Digite um valor");
            if (i == 0) {
                numMaior = vetor[0];
                numMenor = vetor[0];
                indMaior = 0;
                indMenor = 0;
            }
            if ((i > 0) && (vetor[i] > numMaior)) {
                numMaior = vetor[i];
                indMaior = i;
            }
            if ((i > 0) && (vetor[i] < numMenor)) {
                numMenor = vetor[i];
                indMenor = i;
            }
        }
        
        System.out.println("Números digitados: ");
        for (int i = 0; i < vetor.length; i++) {
            System.out.print(vetor[i] + "  ");
        }
        System.out.println("\n");
        System.out.println("O maior valor é: " + numMaior + " com índice " + indMaior);
        System.out.println("O menor valor é: " + numMenor + " com índice " + indMenor);
               
        System.exit(0);
        
    }
    
}
