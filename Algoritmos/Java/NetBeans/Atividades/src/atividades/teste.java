package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class teste {
    
    public static void main(String[] args) {
        
        int[] vetor = new int[10];
        int[][] matriz = new int[5][10];
        
        PreencheVetor.random_10(vetor);
        ImprimeVetor.vetInteiros(vetor);
        System.out.println("\n\n");
        PreencheMatriz.random10(matriz);
        ImprimeMatriz.matInteiros(matriz);
        
    }
    
}
