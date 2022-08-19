package atividades;

/**
 * @author lucianoo_gp
 */

public class Atividade04_0305_Retorno {

    public static void main(String[] args) {

        Mensagem.informacao("Vamos realizar o calculo de uma função do segundo grau");
        double a1 = Entrada.leiaDouble("Digite o valor de 'a'");
        while (a1 == 0)
        {
            Mensagem.erro("O valor de 'a' não pode ser igual a '0'");
            a1 = Entrada.leiaDouble("Digite o valor de 'a'");
        }
        double b1 = Entrada.leiaDouble("Digite o valor de 'b'");
        double c1 = Entrada.leiaDouble("Digite o valor de 'c'");

        double delta = bhaskara(a1, b1, c1);
        double total = 0;

        if (a1 > 0) {
            total = ((-b1 + delta) / (2 * a1));
        } else {
            total = ((-b1 - delta) / (2 * a1));
        }
        
        Mensagem.informacao("O resultado é: " + total);

        System.exit(0);

    }

    public static double bhaskara(double a, double b, double c) {

        double total = (Math.sqrt((b * b) - (4 * a * c)));
        return total;
    }

}
