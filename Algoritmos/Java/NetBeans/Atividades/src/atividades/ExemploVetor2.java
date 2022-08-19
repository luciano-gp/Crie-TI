package atividades;

/**
 * @author lucianoo_gp
 */
public class ExemploVetor2 {
    
    public static void main(String[] args) {
        
        //Declaração das variáveis
        int[] vet1 = new int[8];
        int[] vet2 = new int[8];
        int ind;
        int temp;
        
        //Preenchimento dos vetores
        for (ind = 0; ind < 8; ind++) {
            vet1[ind] = ((int) (Math.random() * 100) + 1);
            vet2[ind] = ((int) (Math.random() * 10) + 1);
        }
        
        //Impressão do vetor A
        System.out.printf("Vetor A: ");
        for (ind = 0; ind < vet1.length; ind++){
            System.out.printf(vet1[ind] + "  ");
        }
        
        //Impressão do vetor B
        System.out.printf("\n\nVetor B: ");
        for (ind = 0; ind < vet2.length; ind++) {
            System.out.printf(vet2[ind] + "  ");
        }
        
        //Troca dos valores dos vetores
        System.out.printf("\n\nTROCANDO...");
        for (ind = 0; ind < vet1.length; ind++) {
            temp = vet1[ind];
            vet1[ind] = vet2[ind];
            vet2[ind] = temp;
        }
        
        //Impressão do vetor A
        System.out.printf("\n\nVetor A: ");
        for (ind = 0; ind < vet1.length; ind++) {
            System.out.printf(vet1[ind] + "  ");
        }
        
        //Impressão do vetor B
        System.out.printf("\n\nVetor B: ");
        for (ind = 0; ind < vet2.length; ind++) {
            System.out.printf(vet2[ind] + "  ");
        }
        
        System.exit(0);
        
    }
    
}
