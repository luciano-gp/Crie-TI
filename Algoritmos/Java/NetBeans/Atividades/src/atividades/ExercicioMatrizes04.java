/*
Criar um programa que faça a leitura de uma matriz 5 x 4. Troque os elementos da
coluna 1 pela coluna 3. E troque os elementos da coluna 0 pela coluna 2. Apresentar
a matriz original e a matriz com os elementos trocados.
 */
package atividades;

/**
 * @author lucianoo_gp
 */
public class ExercicioMatrizes04 {
    
    public static void main(String[] args) {
        
        int[][] matriz = new int[5][4];
        int temp = 0;
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = ((int) (Math.random() * 10));
            }
        }
        
        System.out.println("Matriz original");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println();
        }
        
        System.out.println("\nMatriz invertida");
        for (int i = 0; i < matriz.length; i++) {
            temp = matriz[i][1];
            matriz[i][1] = matriz[i][3];
            matriz[i][3] = temp;
            temp = matriz[i][0];
            matriz[i][0] = matriz[i][2];
            matriz[i][2] = temp;
        }
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println();
        }
        
    }
    
}
