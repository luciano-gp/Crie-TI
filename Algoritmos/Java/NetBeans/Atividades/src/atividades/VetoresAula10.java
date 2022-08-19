package atividades;

/**
 * @author lucianoo_gp
 */
public class VetoresAula10 {
    
    public static void main(String[] args) {
        
        double[] vetor = new double[10];
        
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = ((int) (Math.random() * 100) + 1); //Entrada.leiaDouble("Digite um número");
        }
        
        for (int i = 0; i < vetor.length; i++) {
        System.out.println("Número digitado: " + vetor[i]);
        System.out.println("O dobro: " + (vetor[i] * 2));
        System.out.println("A metade: " + (vetor[i] / 2));
        System.out.println("A raíz quadrada: " + (Math.sqrt(vetor[i])));
        vetor[i] = (vetor[i] * 3);
        System.out.println("Novo valor do vetor: " + vetor[i]);
        System.out.println("--------------------------------------");
        }
        
      /*System.out.println("Novos valores do vetor: ");
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = (vetor[i] * 3);
            System.out.print(vetor[i] + "  ");
        }
      */
        System.exit(0);
        
    }
    
}
