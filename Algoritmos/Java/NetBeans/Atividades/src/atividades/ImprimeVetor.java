package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class ImprimeVetor {
    
    public static void vetInteiros(int[] vetor) {
        System.out.print("|");
        for (int i = 0; i < vetor.length; i++) {
                System.out.print("  " + vetor[i] + "  |");
        }
    }
    
    public static void vetStrings(int[] vetor) {
        System.out.print("|");
        for (int i = 0; i < vetor.length; i++) {
                System.out.print("  " + vetor[i] + "  |");
        }
    }
    
    public static void vetChar(char[] vetor) {
        System.out.print("|");
        for (int i = 0; i < vetor.length; i++) {
                System.out.print("  " + vetor[i] + "  |");
        }
    }
    
}
