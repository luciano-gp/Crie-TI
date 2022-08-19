package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class roboDirecoes {
    
    public static void main(String[] args) {
        
        String pos = Entrada.leiaString("Digite a posição inicial do tux");
        char comando = 'a';
        
        while ((comando != 's') && (comando != 'S')) {
            comando = Entrada.leiaChar("""
                                        Digite:
                                        L para esquerda
                                        R para direita
                                        S para sair""");
        
        
            if (pos.equalsIgnoreCase("norte")) {
                if ((comando == 'l') || (comando == 'L')) {
                    System.out.println("Oeste");
                    pos = "oeste";
                } else if ((comando == 'r') || (comando == 'R')) {
                    System.out.println("Leste");
                    pos = "leste";
                }
            } else
            
            if (pos.equalsIgnoreCase("leste")) {
                if ((comando == 'l') || (comando == 'L')) {
                    System.out.println("Norte");
                    pos = "norte";
                } else if ((comando == 'r') || (comando == 'R')) {
                    System.out.println("Sul");
                    pos = "sul";
                }
            } else
            
            if (pos.equalsIgnoreCase("sul")) {
                if ((comando == 'l') || (comando == 'L')) {
                    System.out.println("Leste");
                    pos = "leste";
                } else if ((comando == 'r') || (comando == 'R')) {
                    System.out.println("Oeste");
                    pos = "oeste";
                }
            } else
            
            if (pos.equalsIgnoreCase("oeste")) {
                if ((comando == 'l') || (comando == 'L')) {
                    System.out.println("Sul");
                    pos = "sul";
                } else if ((comando == 'r') || (comando == 'R')) {
                    System.out.println("Norte");
                    pos = "norte";
                }
            }
            
        }
        
        System.exit(0);
        
    }
    
}
