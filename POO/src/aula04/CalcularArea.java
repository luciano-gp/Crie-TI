package aula04;

import ferramentas.Entrada;
import ferramentas.Mensagem;

/**
 *
 * @author lucianoo_gp
 */
public class CalcularArea {
    
    public static void main(String[] args) {
        
        double x = Entrada.leiaDouble("Base: ");
        double y = Entrada.leiaDouble("Altura: ");
        
        Mensagem.informacao("Área: " + calcArea(x, y) + "m²");
        System.exit(0);        
    }
    
    private static double calcArea (double x, double y) {
        return (x * y);
    }
    
}
