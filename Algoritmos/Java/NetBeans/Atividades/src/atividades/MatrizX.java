/*
 */
package atividades;

/**
 * @author lucianoo_gp
 */
public class MatrizX {
    
    public static void main(String[] args) {
        
        int[][] matriz = new int[5][5];
        
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
        
        System.out.println();
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                if (( i == j) || ( i == (matriz[0].length - 1 - j))) {
                    System.out.print(matriz[i][j] + "\t");
                } else { 
                    System.out.print("\t");
                }
            }
            System.out.println();
        }
        
    }
    
}
