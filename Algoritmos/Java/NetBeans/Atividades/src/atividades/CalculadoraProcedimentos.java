package atividades;

/**
 * @author lucianoo_gp
 */

public class CalculadoraProcedimentos {
    
    public static void main(String[] args) {
        
        double num1 = Entrada.leiaDouble("Digite o primeiro número");
        double num2 = Entrada.leiaDouble("Digite o segundo número");
        double op = Entrada.leiaDouble("""
                                       Escolha a operação que deseja fazer:
                                       [1 - soma]
                                       [2 - subtração]
                                       [3 - multiplicação]
                                       [4 - divisão]""");
        
        if (op == 1) {
            soma (num1, num2);
        }
        if (op == 2) {
            sub (num1, num2);
        }
        if (op == 3) {
            multi (num1, num2);
        }
        if (op == 4) {
            div (num1, num2);
        }
        
        System.exit(0);
        
    }
    
        public static void soma (double n1, double n2) {
        double result = (n1 + n2);
        System.out.println("A soma dos números é: " + result);
    }
    
        public static void sub (double n1, double n2) {
        double result = (n1 - n2);
        System.out.println("A diferença entre os números é: " + result);
    }
        
        public static void multi (double n1, double n2) {
        double result = (n1 * n2);
        System.out.println("O produto dos números é: " + result);
    }   
        
        public static void div (double n1, double n2) {
        double result = (n1 / n2);
        System.out.println("A quociente dos números é: " + result);
    }
    
}
