package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Pratica2305_06 {
    
    public static void main(String[] args) {
        
        String[] nome = new String[100];
        int[] gols = new int[nome.length];
        
        for (int i = 0; i < nome.length; i++) {
            nome[i] = Entrada.leiaString("Qual o nome do jogador?");
            gols[i] = Entrada.leiaInt("Quantos gols " + nome[i] + " marcou?");
        }
        
        System.out.println("O artilheiro do campeonato foi o " + nome[goleador(gols)] + " com " + gols[goleador(gols)] + " gols marcados");
        System.exit(0);
    }
    
    public static int goleador(int[] numGols) {
        int maisGols = 0;
        for (int i = 0; i < numGols.length; i++) {
            if (numGols[i] > maisGols) {
               maisGols = i;
            }
        }
        return maisGols;
    }
    
}
