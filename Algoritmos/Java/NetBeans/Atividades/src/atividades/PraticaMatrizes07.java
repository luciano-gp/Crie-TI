package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaMatrizes07 {
    
    public static void main(String[] args) {
        
        int[][] matrizM = new int [2][3];
        int[][] matrizN = new int [matrizM[0].length][matrizM.length];
        int[][] matrizSoma = new int [matrizM.length][matrizM[0].length];
        
        PreencheMatriz.random10(matrizM);
        PreencheMatriz.random10(matrizN);
        
        System.out.println("Matriz M");
        ImprimeMatriz.matInteiros(matrizM);
        System.out.println("Matriz N");
        ImprimeMatriz.matInteiros(matrizN);
        
        for (int i = 0; i < matrizM.length; i++) {
            for (int j = 0; j < matrizM[0].length; j++) {
                matrizSoma[i][j] = (matrizM[i][j] + matrizN[j][i]);
            }
        }
        
        System.out.println("\nMatris somada");
        ImprimeMatriz.matInteiros(matrizSoma);
        
        System.exit(0);
        
    }
    
}
