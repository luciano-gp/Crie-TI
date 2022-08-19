package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class ImprimeMatriz {
    
    public static void matInteiros(int[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            System.out.print("|");
            for (int j = 0; j < matriz[0].length; j++) {
                System.out.print("  " + matriz[i][j] + "  |");
            }
            System.out.println("\n");
        }
    }
    
    public static void matDoubles(double[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            System.out.print("|");
            for (int j = 0; j < matriz[0].length; j++) {
                System.out.printf("  %.2f  |" , matriz[i][j]);
            }
            System.out.println("\n");
        }
    }
    
    public static void matStrings(String[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            System.out.print("|");
            for (int j = 0; j < matriz[0].length; j++) {
                System.out.print("  " + matriz[i][j] + "  |");
            }
            System.out.println("");
        }
    }
    
}
