package atividades;

/**
 * @author lucianoo_gp
 */
public class Ramal {

    public static void main(String[] args) {

        double[] ramalMinutos = new double[102];
        int[] ramalQuant = new int[ramalMinutos.length];
        int i = 0;

        while (i != 101) {

            i = Entrada.leiaInt("Digite um ramal: ");
            while ((i > 101) || (i < 1)) {
                Mensagem.erro("Ramal Inválido");
                i = Entrada.leiaInt("Digite um ramal: ");
            }
            if (i != 101) {
                ramalMinutos[i] += Entrada.leiaDouble("Minutos que deseja falar: ");
                ramalQuant[i]++;
                Mensagem.informacao("Chamando...");
            } else {
                Mensagem.informacao("Encerrando...");
            }

        }

        for (int j = 0; j < ramalMinutos.length; j++) {
            if (ramalMinutos[j] != 0) {
                System.out.print("Total de chamadas para o ramal " + j + ": " + ramalQuant[j]);
                System.out.printf("\nMinutos falados neste ramal: %.1f", ramalMinutos[j]);
                System.out.println("\n");
            }
        }

        System.exit(0);
        
    }

}
