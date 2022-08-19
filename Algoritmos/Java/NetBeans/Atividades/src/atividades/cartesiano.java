package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class cartesiano {
    
    public static void main(String[] args) {
        int angulo;
        
        angulo = Entrada.leiaInt("Digite o ângulo: ");
        
        while ((angulo < 0) || (angulo > 360)) {
            angulo = Entrada.leiaInt("Ângulo INVÁLIDO!");
        }
        
        Mensagem.informacao("O ângulo está no " + categoria(angulo));
        System.exit(0);
    }
    
    public static String categoria (int num) {
        if ((num >= 1) && (num < 90)) {
            return ("primeiro quadrante");
        } else if ((num > 90) && (num < 180)) {
            return ("segundo quadrante");
        } else if ((num > 180) && (num < 270)) {
            return ("terceiro quadrante");
        } else if ((num > 270) && (num < 360)) {
            return ("quarto quadrante");
        } else {
            return ("sobre eixo");
        }
    }
    
}
