package aula01;

import modelos.Aluno;

/**
 *
 * @author lucianoo_gp
 */
public class ExercicioAluno {
    
    public static void main(String[] args) {
        
        Aluno objAluno1 = new Aluno();
        objAluno1.setIdade(36);
        objAluno1.setNome("Bruno");
        objAluno1.setAltura(1.78);
        objAluno1.setSexo('M');
        
        Aluno objAluno2 = new Aluno();
        objAluno2.setIdade(23);
        objAluno2.setNome("Yuri");
        objAluno2.setAltura(1.76);
        objAluno2.setSexo('M');
        
        //O método imprimir deve mostrar o nome e a idade do aluno juntos
        objAluno1.imprimir();
        objAluno2.imprimir();
        objAluno1.fazAniversario();
        objAluno1.imprimir();
        objAluno2.imprimir();
    }
    
}
