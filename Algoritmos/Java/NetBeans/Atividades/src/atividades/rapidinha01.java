package atividades;

/**
 * @author lucianoo_gp
 */
public class rapidinha01 {

    public static void main(String[] args) {

        String palavra = Entrada.leiaString("Digite uma palavra");
        
        for (int i = palavra.length(); i > 0; i--) {
            System.out.print(palavra.charAt(i-1));
        }
        
        System.exit(0);
        
    /*    String nome = Entrada.leiaString("Digite uma palavra");
        System.out.println(new StringBuilder(nome).reverse().toString());
        System.exit(0);
    */
    }
}
