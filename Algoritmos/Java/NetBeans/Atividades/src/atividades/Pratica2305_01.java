package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Pratica2305_01 {
    
    public static void main(String[] args) {
        
        String texto = Entrada.leiaString("Digite um texto: ");
        char letra = Entrada.leiaChar("Digite o caráctere que deseja saber se há no texto: ");
        
        String search = buscador(texto, letra);
        
        Mensagem.informacao("Esse caráctere é " + search + " no texto");        
        System.exit(0);
    }
    
    public static String buscador(String textoRecebido, char letraRecebida) {
        
        String vouf = "falso";
        for (int i = 0; i < textoRecebido.length(); i++) {
            if (textoRecebido.charAt(i) == letraRecebida) {
                vouf = "verdadeiro";
            }
        }
        return vouf;
    }
    
}
