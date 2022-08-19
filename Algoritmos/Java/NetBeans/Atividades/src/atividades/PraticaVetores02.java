package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaVetores02 {
    
    public static void main(String[] args) {
        
        int[] vetor = new int[7];
        
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = ((int) (Math.random() * 100) + 1); 
        }
        
        System.out.print("Múltiplos de 2 e de 3:  ");
        for (int i = 0; i < vetor.length; i++) {
            if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
                System.out.print(vetor[i] + "  ");
            }  
        }
        System.out.println("");
        System.out.println("-----------------------------");
        System.out.print("Múltiplos de 2:  ");
        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] % 2 == 0) {
                System.out.print(vetor[i] + "  ");
            }  
        }
        System.out.println("");
        System.out.println("-----------------------------");
        System.out.print("Múltiplos de 3:  ");
        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] % 3 == 0) {
                System.out.print(vetor[i] + "  ");
            }  
        }
        System.out.println("");
        
        System.exit(0);
        
    }
    
}
