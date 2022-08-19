package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class PreencheVetor {
    
    public static int[] random_10(int[] vetor) {
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = ((int) (Math.random() * 10));
        }        
        return vetor;
    }
    
    public static int[] random_100(int[] vetor) {
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = ((int) (Math.random() * 100));
        }        
        return vetor;
    }
    
    public static int[] random_5(int[] vetor) {
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = ((int) (Math.random() * 5) + 1);
        }        
        return vetor;
    }
    
}
