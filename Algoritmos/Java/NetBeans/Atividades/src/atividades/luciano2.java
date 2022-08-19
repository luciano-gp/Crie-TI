package atividades;

/**
 * @author lucianoo_gp
 */
public class luciano2 {
    
    public static void main(String[] args) {
        
        int numero = Entrada.leiaInt("Digite um número inteiro:");
        int cont = 0;
        
        for (int i = 1; i <= numero; i++) {
            if (i % 2 == 0) {
                cont++;
            }
        }
        
        Mensagem.informacao("Quantidade de números pares entre 1 e " + numero + " é : " + cont);
        System.exit(0);
        
    }
    
}
