package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class PreencheMatriz {
    
    public static int[][] random10(int[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = ((int) (Math.random() * 10));
            }
        }        
        return matriz;
    }
    
    public static int[][] random5(int[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = ((int) (Math.random() * 5) + 1);
            }
        }        
        return matriz;
    }
    
    public static int[][] random100(int[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = ((int) (Math.random() * 100));
            }
        }        
        return matriz;
    }
    
}
