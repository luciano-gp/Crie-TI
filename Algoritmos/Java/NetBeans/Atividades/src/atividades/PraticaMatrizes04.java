package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaMatrizes04 {
    
    public static void main(String[] args) {
        
        int[][] matriz = new int [2][5];
        String[] nome = new String [matriz.length];
        double[] media = new double [matriz.length];
        String[] conceito = new String [matriz.length];
        double mediaTurma = 0;
        
        for (int i = 0; i < matriz.length; i++) {
            nome[i] = Entrada.leiaString("Nome do aluno: ");
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = Entrada.leiaInt("Nota da prova " + (j + 1) + ": ");
                while ((matriz[i][j] > 10) || (matriz[i][j] < 0)) {
                    Mensagem.erro("Nota deve estar entre 0 e 10");
                    matriz[i][j] = Entrada.leiaInt("Nota da prova " + (j + 1) + ": ");
                }
                media[i] += (matriz[i][j]);
            }
        }
        
        for (int i = 0; i < media.length; i++) {
            media[i] = (media[i] / matriz[0].length);
            if (media[i] >= 7) {
                conceito[i] = "Aprovado";
            } else if (media[i] <= 5) {
                conceito[i] = "Reprovado";
            } else {
                conceito[i] = "de Exame";
            }
        }
        
        for (int i = 0; i < media.length; i++) {
            mediaTurma += media[i];
        }
        
        mediaTurma = (mediaTurma / media.length);
        
        for (int i = 0; i < nome.length; i++) {
            System.out.print(nome[i] + " está " + conceito[i] + " com média ");
            System.out.printf("%.2f%n" , media[i]);
        }
        System.out.println();
        System.out.printf("Média da turma: %.2f" , mediaTurma);
        
        System.exit(0);
    }
    
}
