/*Matriz transposta 5 x 4 (4 x 5) 
 */
package atividades;

/**
 * @author lucianoo_gp
 */
public class ExercicioMatrizes05 {
    
    public static void main(String[] args) {
        
        int[][] matriz = new int[5][4];
        int[][] matrizTransposta = new int[4][5];
        
        System.out.println("Matriz original\n---------------------------------");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = ((int) (Math.random() * 10));
            }
        }
        
        for (int i = 0; i < matriz.length; i++) {
            System.out.print("|");
            for (int j = 0; j < matriz[0].length; j++) {
                System.out.print("   " + matriz[i][j] + "   |");
            }
            System.out.println("\n---------------------------------");
        }
        
        System.out.println();
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matrizTransposta[j][i] = matriz[i][j];
            }
        }
        
        System.out.println("Matriz Transposta\n-----------------------------------------");
        for (int i = 0; i < matrizTransposta.length; i++) {
            System.out.print("|");
            for (int j = 0; j < matrizTransposta[0].length; j++) {
                System.out.print("   " + matrizTransposta[i][j] + "   |");
            }
            System.out.println("\n-----------------------------------------");
        }
        
    }
    
}
