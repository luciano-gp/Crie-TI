package atividades;

/**
 * @author lucianoo_gp
 */
public class Atividade04_0305 {
    
    public static void main(String[] args) {
        
        Mensagem.informacao("Vamos realizar o calculo de uma função do segundo grau");
        double a1 = Entrada.leiaDouble("Digite o valor de 'a'");
            while (a1 == 0) {
                Mensagem.erro("O valor de 'a' não pode ser igual a '0'");
                a1 = Entrada.leiaDouble("Digite o valor de 'a'");
            }
        double b1 = Entrada.leiaDouble("Digite o valor de 'b'");
        double c1 = Entrada.leiaDouble("Digite o valor de 'c'");
        
        bhaskara (a1, b1, c1);
        
        System.exit(0);
        
    }
    
    public static void bhaskara(double a, double b, double c) {
        
        if (a > 0) {
            double total = (-b + Math.sqrt( (b * b) - (4 * a * c) ) ) / (2 * a);
            Mensagem.informacao("O resultado é: " + total);
        } else {
            double total = (-b - Math.sqrt( (b * b) - (4 * a * c) ) ) / (2 * a);
            Mensagem.informacao("O resultado é: " + total);
        }
        
    }
    
}
