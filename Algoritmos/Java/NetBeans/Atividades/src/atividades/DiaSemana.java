package atividades;

/**
 * @author lucianoo_gp
 */
public class DiaSemana {

    public static void main(String[] args) {

        int dia = Entrada.leiaInt("Digite um número:");
        while ((dia > 7) || (dia < 1)) {
            dia = Entrada.leiaInt("Digite um número entre 1 e 7:");
        }

        Mensagem.informacao("Hoje é " + calculo(dia));
        System.exit(0);
    }

    public static String calculo(int dd) {
        return switch (dd)
        {
            case 1 -> ("domingo");
            case 2 -> ("segunda-feira");
            case 3 -> ("terça-feira");
            case 4 -> ("quarta-feira");
            case 5 -> ("quinta-feira");
            case 6 -> ("sexta-feira");
            case 7 -> ("sábado");
            default -> null;
        };
    }
}
            
 