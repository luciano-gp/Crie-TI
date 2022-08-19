/*
Criar um programa que preencha uma matriz 5 x 5 de números inteiros e apresente
ao final, a matriz e um vetor com a soma de todas as linhas da matriz. Este vetor
deverá ter em cada uma de suas posições, a soma de uma das linhas da matriz.
 */
package atividades;

/**
 * @author lucianoo_gp
 */
public class ExercicioMatrizes01 {
    
    public static void main(String[] args) {
        
        int[][] matriz = new int[5][5];
        int[] vetor = new int[5];
        
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
        
        for (int i = 0; i < vetor.length; i++) {
            for (int j = 0; j < vetor.length; j++) {
                vetor[i] += matriz[i][j];
            }
        }
        
        for (int i = 0; i < vetor.length; i++) {
            System.out.print(vetor[i] + "\t"); 
        }
        
    }
    
}
