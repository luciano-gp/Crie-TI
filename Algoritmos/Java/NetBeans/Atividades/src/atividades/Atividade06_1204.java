package atividades;

/**
 * @author lucianoo_gp
 */

public class Atividade06_1204 {

    public static void main(String[] args) {

        int cont, cod;
        double totalp, totalv, total, valor, prest;

        totalv = 0;
        totalp = 0;

        for (cont = 1; cont <= 15; ++cont) {

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

        total = (totalp + totalv);
        prest = (totalp / 3);

        System.out.println("O total de compras à vista: R$" + totalv);
        System.out.println("O total de compras a prazo: R$" + totalp);
        System.out.println("O total de compras: R$" + total);
        System.out.println("O total da primeira prestação das compras a prazo: R$" + prest);
        System.exit(0);
        
    }
}
