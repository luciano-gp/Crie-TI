package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaMatrizes05_2 {
    
    public static void main(String[] args) {
        
        String[] meses = {"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"};
        double[][] vendas = new double[2][4];
        double[] vendasMensais = new double[vendas.length];
        double[] vendasSemanais = new double[vendas[0].length];
        double total = 0;
        
        for (int i = 0; i < vendas.length; i++) {
            for (int j = 0; j < vendas[0].length; j++) {
                vendas[i][j] = Entrada.leiaDouble("Valor vendido na semana " + (j + 1) + " do mês de " + meses[i]);
                total += vendas[i][j];
                vendasMensais[i] += (vendas[i][j]);
            }
        }
        
        System.out.println("Total de vendas por mês: \n");
        for (int i = 0; i < vendas.length; i++) {
            System.out.println("Mês de " + meses[i] + ": R$" + vendasMensais[i]);
        }
        System.out.println("\nTotal de venda por semana: \n");
        for (int i = 0; i < vendas.length; i++) {
            for (int j = 0; j < vendas[0].length; j++) {
                System.out.print("Semana " + ((i * vendas[0].length) + j + 1) + ": R$" + vendas[i][j] + "\n");
            }
            
        }
        System.out.println("------------------------------------\n");
        System.out.println("Total de vendas no ano: R$" + total);
        System.exit(0);
        
    }
    
}
