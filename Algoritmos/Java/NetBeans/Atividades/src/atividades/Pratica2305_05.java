package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Pratica2305_05 {
    
    public static void main(String[] args) {
        
        String[] nome = new String[300]; 
        int[] idade = new int[nome.length]; 
        int[] altura = new int[nome.length];
        int cont25 = 0;
        int cont = 0;
        
        for (int i = 0; i < nome.length; i++) {
            nome[i] = Entrada.leiaString("Nome do aluno " + (i + 1));
            idade[i] = Entrada.leiaInt("Idade do aluno " + nome[i]);
            altura[i] = Entrada.leiaInt("Altura, em cm, do aluno " + nome[i]);
        }
        
        System.out.println("Alunos com altura superior a média: ");
        for (int i = 0; i < nome.length; i++) {
            if (altura[i] > media(altura)) {
                System.out.println(nome[i]);
            }
        }
        
        for (int i = 0; i < nome.length; i++) {
            if (idade[i] >= 25) {
                cont25++;
            }
        }
        System.out.println("\nAlunos com mais de 25 anos: " + cont25);
        
        for (int i = 0; i < nome.length; i++) {
            if (idade[i] < media(idade) ) {
                cont++;
            }
        }
        System.out.println("\nAlunos com idade inferior a média: " + cont);
        
        System.out.println("\nAlunos com idade inferior a 18 anos e altura inferior a média");
        for (int i = 0; i < nome.length; i++) {
            if ((idade[i] < 18) && (altura[i] < media(altura))) {
                System.out.println(nome[i]);
            }
        }
        
        System.exit(0);
        
    }
    
    public static double media(int[] vetor) {
        double media = 0;
        for (int i = 0; i < vetor.length; i++) {
            media += vetor[i];
        }
        media = (media / vetor.length);
        return media;
    }

}
