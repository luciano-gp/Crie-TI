package atividades;

/**
 * @author lucianoo_gp
 */
public class lucianogomes_04 {

    public static void main(String[] args) {

        int estudantes = 5, es = 0, ec = 0, es21 = 0, idade;
        char curso;

        for (int i = 1; i <= estudantes; i++) {

            curso = Entrada.leiaChar("""
                                     Qual curso o aluno esta matrículado? 
                                     [A] Engenharia de Software 
                                     [B] Engenharia da Computação""");
            while ((curso != 'a') && (curso != 'b') && (curso != 'A') && (curso != 'B')) {
                curso = Entrada.leiaChar("""
                                         Operação inválida! 
                                         Qual curso o aluno esta matrículado? 
                                         [A] Engenharia de Software 
                                         [B] Engenharia da Computação""");
            }
            idade = Entrada.leiaInt("Qual a idade do aluno?");

            if (((curso == 'a') || (curso == 'A')) && (idade >= 18)) {
                es21++;
                es++;
            } else if ((curso == 'a') || (curso == 'A')) {
                es++;
            } else {
                ec++;
            }

        }

        System.out.println("O total de alunos matrículados no curso de "
                + "Engenaharia de software foi de: " + es + " alunos");
        System.out.println("Sendo que " + es21 + " alunos são maior de idade.");
        System.out.println("O total de alunos matrículados no curso de "
                + "Engenaharia da computação foi de: " + ec + " alunos");
        System.exit(0);

    }
}
