package atividades;

/**
 * @author lucianoo_gp
 */
public class lucianogomes_05 {

    public static void main(String[] args) {

        int n = 0, div = 1;

        n = Entrada.leiaInt("Digite um número");
        System.out.println(" ");
        System.out.println("Seus divisores são:");

        while (n >= div) {
            if (n % div == 0) {
                System.out.println(div);
            }
            div++;
        }

        System.exit(0);

    }

}
