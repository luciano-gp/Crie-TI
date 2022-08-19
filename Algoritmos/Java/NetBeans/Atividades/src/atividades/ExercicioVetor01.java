/*
Criar um programa que faça a soma de elementos do mesmo índice, de 2 vetores e 
armazena no mesmo índice de outro vetor. Apresentar ao final os elementos dos 3
vetores. Os elementos dos 2 primeiros vetores podem ser sorteados. O tamanho dos
vetores deverá ser de 10 elementos.
*/
package atividades;

/**
 * @author lucianoo_gp
 */
public class ExercicioVetor01 {
    
    public static void main(String[] args) {
        
        int[] a = new int[10];
        int[] b = new int[10];
        int[] c = new int[10];
        int i;
        
        for (i = 0; i < 10; i++) {
            a[i] = ((int) (Math.random() * 10) + 1);
            b[i] = ((int) (Math.random() * 10) + 1);            
        }
        
        System.out.printf("Vetor A: ");
        for (i = 0; i < a.length; i++) {
            System.out.printf(a[i] + "  ");            
        }
        
        System.out.printf("\n\nVetor B: ");
        for (i = 0; i < b.length; i++) {
            System.out.printf(b[i] + "  ");            
        }
        
        System.out.printf("\n\nSoma:   ");
        for (i = 0; i < c.length; i++) {
            c[i] = (a[i] + b[i]);
            System.out.printf(c[i] + "  ");
        }
        
        System.exit(0);   
        
    }
    
}
