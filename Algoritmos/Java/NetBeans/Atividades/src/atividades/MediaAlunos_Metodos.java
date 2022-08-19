package atividades;
import java.util.*;
/**
 * @author lucianoo_gp
 */
public class MediaAlunos_Metodos {

    public static void main(String[] args) {
        
        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite a nota 1: ");
        double n1 = entrada.nextDouble();
        System.out.println("Digite a nota 2: ");
        double n2 = entrada.nextDouble();
        System.out.println("Digite a nota 3: ");
        double n3 = entrada.nextDouble();

        media(n1, n2, n3);

        System.exit(0);
    }

    public static void media(double m1, double m2, double m3) {

        double medAluno = ((m1 + m2 + m3) / 3);

        if (medAluno >= 7) {
            System.out.printf("O aluno foi APROVADO com média %.1f%n", medAluno);
        } else {
            System.out.printf("O aluno foi REPROVADO com média %.1f%n", medAluno);
        }
    }
}
