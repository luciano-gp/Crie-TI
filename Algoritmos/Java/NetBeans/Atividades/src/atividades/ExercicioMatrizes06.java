/*Somar diagonal principal 5 x 5
 */
package atividades;

/**
 * @author lucianoo_gp
 */
public class ExercicioMatrizes06 {
    
        public static void main(String[] args) {
        
        int[][] matriz = new int[5][5];
        int soma = 0;
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = ((int) (Math.random() * 10));
            }
        }
        
        System.out.println("Matriz 5 x 5\n-------------------------------");
        for (int i = 0; i < matriz.length; i++) {
            System.out.print("|");
            for (int j = 0; j < matriz[0].length; j++) {
                System.out.print("  " + matriz[i][j] + "  |");
            }
            System.out.println("\n-------------------------------");
        }
        
        System.out.println("Diagona principal");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                if ( i == j) {
                    System.out.print(matriz[i][j]);
                    soma += matriz[i][j];
                } else { 
                    System.out.print("\t");
                }
            }
            System.out.println();
        }
        
        System.out.println("\nSoma da diagonal principal: " + soma);
        System.exit(0);
        
    }
    
}
