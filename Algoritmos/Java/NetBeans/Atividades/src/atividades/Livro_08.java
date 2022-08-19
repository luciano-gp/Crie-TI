/*8. Faça um algoritmo que construa dois vetores A e B de 10 elementos e deles 
crie um vetor C, composto pela soma dos elementos, sendo:
 C[1]<-A[1]+B[10], C[2]<-A[2]+B[9], C[3]<-A[3]+B[8] etc.
 */
package atividades;

/**
 * @author lucianoo_gp
 */
public class Livro_08 {
    
    public static void main(String[] args) {
        
        int[] a = new int[10];
        int[] b = new int[10];
        int[] c = new int[10];
        int j = (b.length - 1);
        
        for (int i = 0; i < a.length; i++) {
            a[i] = ((int) (Math.random() * 10));
            b[i] = ((int) (Math.random() * 10));
        }
        
        for (int i = 0; i < 10; i++) {
            c[i] = (a[i] + b[j]);
            j--;
        }
        
        System.out.println("Vetor A");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        
        System.out.println("");
        System.out.println("Vetor B invertido");
        for (int i = 0; i < b.length; i++) {
            System.out.print(b[9-i] + " ");
        }
        
        System.out.println("");
        System.out.println("A soma:");
        for (int i = 0; i < c.length; i++) {
            System.out.print(c[i] + " ");
        }
        
        System.exit(0);
        
    }
    
}
