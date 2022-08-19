/*
Criar um programa que faça o sorteio de 10 números inteiros, armazene-os em um 
vetor[10], apresente os números armazenados no vetor; os elementos x 2 onde seu
índice é par; apresentar os elementos x 5 onde seu índice for divisível por 5.
 */
package atividades;

/**
 * @author lucianoo_gp
 */
public class Atividade01_1305 {
    
    public static void main(String[] args) {
        
        int[] vetor = new int[10];
        
        System.out.println("Números do vetor: ");
        for (int i = 0; i < vetor.length; i++) {
           vetor[i] = ((int) (Math.random() * 100) + 1);
           System.out.print(vetor[i] + "  ");
        }
        
        System.out.println("\n");
        System.out.println("Número pares multiplicados por 2: ");
        for (int i = 0; i < vetor.length; i++) {           
            if (vetor[i] % 2 == 0){
                System.out.print(vetor[i] * 2 + "  ");
            }
        }
        
        System.out.println("\n");
        System.out.println("Números divisiveis por 5 multiplicados por 5: ");
        for (int i = 0; i < 10; i++) {
            if (vetor[i] % 5 == 0) {
                System.out.print(vetor[i] * 5 + "  ");
            }
        }
        
        System.out.println("");
        System.exit(0);
    }
    
}
