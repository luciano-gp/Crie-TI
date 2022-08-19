/*
Criar um programa para fazer a leitura de uma matriz 4 x 3, calcular a média dos
elementos de cada coluna, e apresentar a quantidade de elementos de cada coluna
que estão abaixo da média. Apresentar ao final, os elementos da matriz, as médias
e a quantidade de elementos que estão abaixo da média de cada coluna.
 */
package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class ExercicioMatrizes03 {
        
        public static void main(String[] args) {
        
        int[][] matriz = new int[4][3];
        double[] vetor = new double[3];
        int[] contMedia = new int[3];
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = ((int) (Math.random() * 10));
            }
        }
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println();
        }
        
        for (int i = 0; i < matriz[0].length; i++) {
            for (int j = 0; j < matriz.length; j++) {
                vetor[i] += matriz[j][i];
            }
        }
        
        System.out.println("\nMédia das colunas: ");
        for (int i = 0; i < vetor.length; i++) {
            System.out.printf("%.2f \t", (vetor[i] / matriz.length));
            for (int j = 0; j < matriz.length; j++) {
                if (matriz[j][i] < (vetor[i] / matriz.length)){
                    contMedia[i]++;
                }
            }
        }
        
        System.out.println("\n");
        for (int i = 0; i < vetor.length; i++) {
             System.out.print("Quantidade de valor(es) abaixo da média na coluna " + i);
             System.out.print(": " + contMedia[i] + "\n");
        }
          
        System.exit(0);
        
    }
    
}
