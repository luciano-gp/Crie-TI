/*
9. Elabore um algoritmo que crie dois vetores A e B de 10 elementos e deles crie um vetor C,
composto pela união dos elementos de A e B dispostos em ordem crescente, exibindo o resultado.
*/
package atividades;

//import java.util.Arrays;

/*
 * @author lucianoo_gp
 */
public class Livro_09 {
    
        public static void main(String[] args) {
        
            int[] a = new int[10];
            int[] b = new int[10];
            int[] c = new int[20];
            int j = 0;
            int temp = 0;
            
            for (int i = 0; i < 10; i++) {
                a[i] = ((int) (Math.random() * 100));
                b[i] = ((int) (Math.random() * 100));
            }
            
            //System.arraycopy(a, 0, c, 0, 10);
            //System.arraycopy(b, 0, c, 10, 10);
            //Arrays.sort(c);
            
            for (int i = 0; i < 10; i++) {
                c[i] = a[i];
            }
            
            for (int i = 10; i < 20; i++) {
                c[i] = b[j];
                j++;
            }
            
            for (int i = 0; i < 20; i++) {
                for (int k = 0; k < 20; k++) {
                    if (c[k] > c[i]) {
                        temp = c[k];
                        c[k] = c[i];
                        c[i] = temp;
                    }
                }
                
            }
            
            for (int i = 0; i < 10; i++) {
                System.out.print(a[i] + " ");
            }
            System.out.println("");
            for (int i = 0; i < 10; i++) {
                System.out.print(b[i] + " ");
            }
            System.out.println("");
            for (int i = 0; i < 20; i++) {
                System.out.print(c[i] + " ");
            }
            
    }
        
}
