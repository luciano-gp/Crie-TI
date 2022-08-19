package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaMatrizes01 {
    
    public static void main(String[] args) {
        
        int[][] matriz = new int [3][5];
        int soma = 0;
        int cont = 0;
        
        PreencheMatriz.random100(matriz);
        ImprimeMatriz.matInteiros(matriz);
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                if ((matriz[i][j] <= 20) && (matriz[i][j] >= 15)) {
                    cont++;
                    soma += matriz[i][j];
                }
            }   
        }
        
        System.out.println("Temos " + cont + " número entre 15 e 20, e a soma deles é " + soma);
        System.exit(0);
        
    }
    
}
