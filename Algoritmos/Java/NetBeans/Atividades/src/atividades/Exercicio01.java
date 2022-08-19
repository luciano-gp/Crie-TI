package atividades;

/**
 * @author lucianoo_gp
 */
public class Exercicio01 {

    public static void main(String[] args) {

        double qtde = 0, valor = 0, total = 0;

        for (int i = 1; i <= 5; i++) {
            qtde = Entrada.leiaDouble("Digite a quantidade do produto " + i);
            valor = Entrada.leiaDouble("Digite o preço unitário do produto " + i);
            total = total + (valor * qtde);
        }

        System.out.println("O valor total gasto foi de R$" + total);
        System.exit(0);

    }

}
