package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class gincanaRapidinha03 {
    
    public static void main(String[] args) {
        
        int[] vetor = new int[10];
        String[] vetor2 = new String[10];
        
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = ((int) (Math.floor(Math.random() * (1000 - 500) + 499)));
            if (vetor[i] % 4 != 0) {
                vetor2[i] = "???";
            } else {
                vetor2[i] = ("" + vetor[i]);
            }
        }
        
        for (int i = 0; i < 10; i++) {
            System.out.print(" " + vetor[i]);
        }
        System.out.println("\n");
        for (int i = 0; i < 10; i++) {
            System.out.print(" " + vetor2[i]);
        }
        
    }
    
}
