package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class gincanaRapidinha04 {
    
    public static void main(String[] args) {
        
        String nome = Entrada.leiaString("Digite o nome:");
        
        Mensagem.informacao("Seu email é: " + geraEmail(nome.toLowerCase()));
        
        System.exit(0);
        
    }
    
    public static String geraEmail(String nome) {
        
        StringBuilder iniciais = new StringBuilder();
        iniciais.append(nome.charAt(0));
        for (int i = 0; i < nome.length(); i++) {
            if (nome.charAt(i) == ' ') {
                iniciais.append(nome.charAt(i + 1));
            }
        }
        iniciais.append("@algoritmos.com.br");
        String email = iniciais.toString();
        return email;
    }
    
}
