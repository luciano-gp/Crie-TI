package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Pratica2305_07 {
    
    public static void main(String[] args) {
        
        String[] nome = new String[70];
        int[] gabarito = new int[50];
        int[][] respostas = new int[nome.length][gabarito.length];
        
        PreencheVetor.random_5(gabarito);
        System.out.print("Gabarito :\t");
        ImprimeVetor.vetInteiros(gabarito);
        System.out.println("\n");
        
        for (int i = 0; i < respostas.length; i++) {
            nome[i] = Entrada.leiaString("Nome do aluno " + (i + 1));
            for (int j = 0; j < respostas[0].length; j++) {
                respostas[i][j] = Entrada.leiaInt("Qual a resposta do aluno " + nome[i] + " para a questão " + (j + 1));
                while ((respostas[i][j] > 5) || (respostas[i][j] < 1)) {
                    Mensagem.erro("Respostas entre 1 e 5");
                    respostas[i][j] = Entrada.leiaInt("Qual a resposta do aluno " + nome[i] + " para a questão " + (j + 1));
                }
            }
        }
        
        for (int i = 0; i < respostas.length; i++) {
            System.out.print("\n" + nome[i] + " :\t");
            System.out.print("|");
            for (int j = 0; j < respostas[0].length; j++) {
                System.out.print("  " + respostas[i][j] + "  |");
            }
            System.out.println("\tAcertos : " + corretor(respostas, gabarito, i));
        }
        
        System.exit(0);
    }
    
    public static int corretor(int[][] respostas, int[] gabarito, int posicao) {
        
        int cont = 0;
        for (int i = 0; i < gabarito.length; i++) {
            if (respostas[posicao][i] == gabarito[i]) {
                cont++;
            }            
        }
        return cont;
    }
    
}
