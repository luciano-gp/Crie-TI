package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class roboAndante {
    
    public static void main(String[] args) {
        
        char[][] jogo = new char[4][4];
        int linha = Entrada.leiaInt("Digite a linha: ");
        int coluna = Entrada.leiaInt("Digite a coluna: ");
        char orientacao = Entrada.leiaChar("""
                                           Qual a orientação?
                                           N - Norte
                                           L - Leste
                                           S - Sul
                                           O - Oeste""");
        
        
        if ((orientacao == 'n') || (orientacao == 'N')) {
            jogo[linha - 1][coluna - 1] = '^';
        } else if ((orientacao == 'l') || (orientacao == 'L')) {
            jogo[linha - 1][coluna - 1] = '>';
        } else if ((orientacao == 's') || (orientacao == 'S')) {
            jogo[linha - 1][coluna - 1] = 'v';
        } else if ((orientacao == 'o') || (orientacao == 'O')) {
            jogo[linha - 1][coluna - 1] = '<';
        }
        
        System.out.println("-----------------");
        for (int i = 0; i < jogo.length; i++) {
            System.out.print("|");
            for (int j = 0; j < jogo[0].length; j++) {
                System.out.print(jogo[i][j] + "   |");
            }
            System.out.println("\n-----------------");
        }
        
        System.exit(0);
    }
    
}
