package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaVetores01 {

    public static void main(String[] args) {

        int[] vetor = new int[6];
        int par = 0;
        int impar = 0;

        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = ((int) (Math.random() * 100) + 1);
            
            if (vetor[i] % 2 == 0) {
                par++;
            } else {
                impar++;
            }
        }

        System.out.println("Quantidade de números pares: " + par);
        System.out.print("Sendo eles: ");
        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] % 2 == 0) {
                System.out.print(vetor[i] + "  ");
            }  
        }
        System.out.println("");
        System.out.println("-----------------------------");
        System.out.println("Quantidade de números impares: " + impar);
        System.out.print("Sendo eles: ");
        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] % 2 != 0) {
                System.out.print(vetor[i] + "  ");
            }  
        }
        System.out.println("");
        
        System.exit(0);
        
    }

}
