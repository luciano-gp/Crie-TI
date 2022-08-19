package atividades;

/**
 * @author lucianoo_gp
 */
public class Atividade03_1204_Metodos {

    public static void main(String[] args) {

        int id, cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0;

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

        contador(cont1, cont2, cont3, cont4, cont5);
        porc(cont1, "1º");
        porc(cont5, "5º");

        System.exit(0);

    }

    public static void contador (int c1, int c2, int c3, int c4, int c5) {
        System.out.println("Pessoas na 1º faixa etária: " + c1);
        System.out.println("Pessoas na 2º faixa etária: " + c2);
        System.out.println("Pessoas na 3º faixa etária: " + c3);
        System.out.println("Pessoas na 4º faixa etária: " + c4);
        System.out.println("Pessoas na 5º faixa etária: " + c5);
    }

    public static void porc (double porc1, String texto) {
        porc1 = ((porc1 * 100) / 8);
        System.out.printf("%.1f%% das pessoas estão na " + texto + " faixa etária\n" , porc1);
    }
    
}