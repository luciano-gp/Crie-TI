package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaMatrizes06 {
    
    public static void main(String[] args) {
        
        int[][] matriz = new int[20][10];
        int[][] matriz2 = new int[20][10];
        int[] vetor = new int[matriz[0].length];
        
        PreencheMatriz.random10(matriz);
        System.out.println("Matriz original");
        ImprimeMatriz.matInteiros(matriz);
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                vetor[j] += matriz[i][j];
            }
        }
        
        System.out.println("\nSoma das colunas:\n");
        System.out.print("|  ");
        for (int i = 0; i < vetor.length; i++) {
            System.out.print(vetor[i] + "  |  ");
        }
        
        System.out.println("\n\n\nMatriz multiplicada");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz2[i][j] = (matriz[i][j] * vetor[j]);
            }
        }
        
        ImprimeMatriz.matInteiros(matriz2);
        
        System.exit(0);
        
    }
    
}
