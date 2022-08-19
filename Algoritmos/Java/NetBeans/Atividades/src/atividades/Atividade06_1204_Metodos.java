package atividades;

/**
 * @author lucianoo_gp
 */
public class Atividade06_1204_Metodos {

    public static void main(String[] args) {

        int cod;
        double totalp, totalv, valor;

        totalv = 0;
        totalp = 0;

        for (int cont = 1; cont <= 5; ++cont) {

            valor = Entrada.leiaDouble("Qual o valor da compra?");
            cod = Entrada.leiaInt("""
                                  (1) Á vista 
                                  (2) A prazo""");
            while (cod != 1 && cod != 2) {
                cod = Entrada.leiaInt("""
                                      (1) Á vista 
                                      (2) A prazo""");
            }
            if (cod == 1) {
                totalv = totalv + valor;
            } else {
                totalp = totalp + valor;
            }
        }

        calcTotal(totalv, totalp);
        calcParcela(totalp);
        System.exit(0);
    }

    public static void calcTotal(double tv, double tp) {
        double total = (tv + tp);
        System.out.printf("O total de compras foi de: R$ %.2f%n", total);
        System.out.printf("Sendo, á vista: R$ %.2f%n", tv);
        System.out.printf("e, a prazo: R$ %.2f%n", tp);
    }

    public static void calcParcela(double primParc) {
        primParc = (primParc / 3);
        System.out.printf("O total da primeira parcela (a prazo) é de: R$ %.2f%n", primParc);
    }

}
