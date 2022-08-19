package aula02;

/**
 *
 * @author lucianoo_gp
 */
public class CompararString {
    
    //Usamos as variáveis fora como exemplo, dessa forma (usando static e fora do método main) qualquer método desta
    //classe podem usar essas variáveis
    static String nome1 = "luciano";
    static String nome2 = "LUCIANO";
    
    public static void main(String[] args) {

        if (nome1.equals(nome2)) {
            System.out.println("Os nomes são iguais (case sensitive)");
        } else if (nome1.equalsIgnoreCase(nome2)) {
            System.out.println("Os nomes são iguais (case insensitive)");
        } else {
            System.out.println("Os nome não são iguais");
        }
        
    }
    
}
