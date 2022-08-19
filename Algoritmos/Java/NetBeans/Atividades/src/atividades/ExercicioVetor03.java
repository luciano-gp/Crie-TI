/*
Criar um programa que calcule a média de 10 alunos (sabendo-se que este possui 3
notas). Além das notas, deve ser lido o nome do aluno. Apresentar ao final do 
programa: o nome do aluno e sua respectiva média.
*/
package atividades;

/**
 * @author lucianoo_gp
 */
public class ExercicioVetor03 {
    
    public static void main(String[] args) {
        
        int q = 10;
        String[] nome = new String[q];
        double[] media = new double[q];
        
        for (int i = 0; i < q; i++) {
            nome[i] = Entrada.leiaString("Nome do aluno: ");
            double n1 = Entrada.leiaDouble("Nota 1: ");
            double n2 = Entrada.leiaDouble("Nota 2: ");
            double n3 = Entrada.leiaDouble("Nota 3: ");           
            media[i] = calcMedia(n1, n2, n3);
        }   
        
        for (int i = 0; i < q; i++) {
            System.out.printf("Aluno: " + nome[i] + "\nMédia: %.2f%n" , media[i]);
            System.out.println("-------------------------------------------------");
        }
        
        System.exit(0);
        
    }
    
    public static double calcMedia(double nota1, double nota2, double nota3) {
        double media = ((nota1 + nota2 + nota3) / 3);
        return media;
    }
    
}
