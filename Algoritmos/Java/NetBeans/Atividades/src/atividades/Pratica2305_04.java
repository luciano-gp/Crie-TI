package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Pratica2305_04 {
    
    public static void main(String[] args) {
        
        double c = Entrada.leiaDouble("Qual o montante aplicado?");
        double i = Entrada.leiaDouble("Qual a taxa por trimestre?");
        int x = Entrada.leiaInt("Qual o período, em anos, da aplicação?");
        
        double[][] matriz = tabRend(c, i, x);
        System.out.println("Anos ↓\t|\tTrimestres →");
        ImprimeMatriz.matDoubles(matriz);
        
        System.exit(0);
        
    }
    
    public static double[][] tabRend(double valor, double taxa, int ano) {
        
        double[][] matriz = new double [ano][4];
        
        taxa = (taxa/100);
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                matriz[i][j] = (valor * Math.pow((taxa + 1), ((i * matriz[0].length) + j + 1)));
            }
        }
        return matriz;
    }
    
}
