/*
3. Crie vetores para armazenar:
a) as letras vogais do alfabeto;
b) as alturas de um grupo de dez pessoas
c) os nomes dos meses do ano.
 */
package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Livro_03 {
    
    public static void main(String[] args) {
        
        char[] vogais = {'a', 'e', 'i', 'o', 'u'};
        double[] alturas = {1.80, 1.77, 1.75, 1.88, 1.83, 1.70, 1.68, 1.73, 1.81, 2.00}; 
        String[] meses = {"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"};
        
        System.out.println("As vogais do alfabeto são: ");
        for (int i = 0; i < vogais.length; i++) {
            System.out.print(vogais[i] + " ");
        }
        
        System.out.println("\n");
        System.out.println("A altura de 10 pessoas: ");
        for (int i = 0; i < alturas.length; i++) {
            System.out.printf("%.2f m" , alturas[i]);
            System.out.println("");
        }
        
        System.out.println("");
        System.out.println("Os meses do ano são: ");
        for (int i = 0; i < meses.length; i++) {
            System.out.println(meses[i]);
        }
        
        System.exit(0);
        
    }
    
}
