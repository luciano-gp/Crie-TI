package atividades;

/**
 * @author lucianoo_gp
 */
public class Atividade07_1204_Metodos {

    public static void main(String[] args) {

        int id, alt, contid, contalt;
        double peso, medialt, contpeso;

        contid = 0;
        medialt = 0;
        contalt = 0;
        contpeso = 0;

        for (int cont = 1; cont <= 5; cont++) {
            id = Entrada.leiaInt("Qual sua idade?");
            alt = Entrada.leiaInt("Qual sua altura, em cm?");
            peso = Entrada.leiaDouble("Qual seu peso, em kg?");

            if (id > 50) {
                contid++;
            }
            if ((id >= 10) && (id <= 20)) {
                medialt = (medialt + alt);
                contalt++;
            }
            if (peso < 40) {
                contpeso++;
            }
        }

        System.out.println("Pessoas com mais de 50 anos: " + contid);
        mediaAltEntre (medialt, contalt);
        pesoInf40 (contpeso);
        System.exit(0);
        
    }
        
    public static void mediaAltEntre (double mediaAlt, int cAlt) {
        mediaAlt = (mediaAlt / cAlt);
        System.out.println("Média das alturas das pessoas entre 10 e 20 anos: " + mediaAlt + "cm");
    }
    
    public static void pesoInf40 (double peso40) {
        peso40 = ((peso40 / 5) * 100);
        System.out.printf("Pessoas com menos de 40kg: %.1f" , peso40);
        System.out.print("%\n");
    }
            
}
