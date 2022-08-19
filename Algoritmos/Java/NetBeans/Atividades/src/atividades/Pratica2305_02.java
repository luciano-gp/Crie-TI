package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Pratica2305_02 {
    
    public static void main(String[] args) {
        
        int[] vetor = new int[20];
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = ((int) (Math.random() * 100) + 1);
        }  
        int num = Entrada.leiaInt("Digite um número: ");
        
        Mensagem.informacao("O número digitado aparece " + contador(vetor, num) + " vez(es) no vetor");
        System.exit(0);
    }
    
    public static int contador(int[] vetorRecebido, int numRecebido) {
        
        int cont = 0;
        for (int i = 0; i < vetorRecebido.length; i++) {
            if (vetorRecebido[i] == numRecebido) {
                cont++;
            }
        }
        return cont;
    }
    
}
