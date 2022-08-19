package atividades;

/**
 * @author lucianoo_gp
 */
public class Atividade03_1204 {

    public static void main(String[] args) {
        
        int id, cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0;
        double porc1, porc5;
        
        for (int i = 1; i <= 8; i++) {
            
            id = Entrada.leiaInt("Qual a idade do nº " + i + " ?");
            
            if (id <= 15) {
                cont1++;
            } else if ((id >= 16) && (id <= 30)) {
                cont2++;
            } else if ((id >= 31) && (id <= 45)) { 
                cont3++;
            } else if ((id >= 46) && (id <= 60)) {
                cont4++;
            } else {
                cont5++;
            }
            
        }
            
            porc1 = ((cont1 * 100) / 8);
            porc5 = ((cont5 * 100) / 8);
            
            System.out.println("Pessoas na 1º faixa etária: " + cont1);
            System.out.println("Pessoas na 2º faixa etária: " + cont2);
            System.out.println("Pessoas na 3º faixa etária: " + cont3);
            System.out.println("Pessoas na 4º faixa etária: " + cont4);
            System.out.println("Pessoas na 5º faixa etária: " + cont5);
            System.out.println("Estando, então, " + porc1 + "% na 1º, e " + porc5 + "% na 5º");
            System.exit(0);
        
    }
}
