package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class ExemploVetor {
    
    public static void main(String[] args) {
        
        double soma;
        double[] vetor = new double[5];
        int contador;
        int acimadamedia;
        double media;
        media = soma = contador = 0;
        
        while (contador < 5) {
            vetor[contador] = Entrada.leiaDouble("Digite uma nota");
            soma += vetor[contador];
            contador++;
        }
        
        media = soma/5;
        acimadamedia = 0;
        contador = 0;
        
        while (contador < 5) {
            if(vetor[contador] > media) {
                acimadamedia++;
            }
            
            contador++;
            
        }
        
        Mensagem.informacao("A média é " + media);
        Mensagem.informacao("Alunos acima da media: " + acimadamedia);
        System.exit(0);
        
    }
    
}
