package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaMatrizes02 {
    
    public static void main(String[] args) {
           
        int[][] matriz = new int [2][4];
        double media = 0;
        int contMedia = 0;
        int[] cont = new int[matriz.length];
        
        PreencheMatriz.random100(matriz);
        ImprimeMatriz.matInteiros(matriz);
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                if ((matriz[i][j] <= 20) && (matriz[i][j] >= 12)) {
                    cont[i]++;
                }
                if (matriz[i][j] % 2 == 0) {
                    contMedia++;
                    media += matriz[i][j];
                }
            }            
        }
        
        media = (media / contMedia);
        
        for (int i = 0; i < matriz.length; i++) {
            System.out.println("Temos " + cont[i] + " numeros entre 12 e 20 na linha " + (i + 1));
        }
        System.out.printf("A média dos elementos pares na matriz é %.2f" , media);
        System.exit(0);
        
    }
    
}
