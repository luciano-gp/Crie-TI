package atividades;

/**
 * @author lucianoo_gp
 */
public class CalculadoraMenu {
    
    public static void main(String[] args) {
      
        int op = 0;
        double result = 0;
        
        while (op != 5) {
            
            int x = Entrada.leiaInt("Digite o valor de 'x'");
            int y = Entrada.leiaInt("Digite o valor de 'y'");            
            op = Entrada.leiaInt("""
                                 [1] Soma 
                                 [2] Subtração 
                                 [3] Divisção 
                                 [4] Multiplicação 
                                 [5] Sair""");
            while ((op != 1) && (op != 2) && (op != 3) && (op != 4) && (op != 5)) {
                op = Entrada.leiaInt("""
                                 [1] Soma 
                                 [2] Subtração 
                                 [3] Divisção 
                                 [4] Multiplicação 
                                 [5] Sair""");
            }
            
            /*if (op == 1) {
            result = (x + y);
            } else if (op == 2) {
            result = (x - y);
            } else if (op == 3) {
            result = (x / y);
            } else if (op == 4) {
            result = (x * y);
            } else if (op == 5) {
            System.exit(0);
            }*/
            switch (op) {
                case 1:
                    result = (x + y);
                    break;
                case 2:
                    result = (x - y);
                    break;
                case 3:
                    result = (x / y);
                    break;
                case 4:
                    result = (x * y);
                    break;
                case 5:
                    System.exit(0);
                default:
                    break;
            }
            
            
        Mensagem.informacao("O resultado é: " + result);   
        
        }
        
        System.exit(0);
    }
    
}
