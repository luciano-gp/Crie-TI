package atividades;

/**
 * @author lucianoo_gp
 */
public class rapidinha02_marcel {
    
    public static void main(String[] args) {
        String nome = Entrada.leiaString("Informe seu nome completo");
        
        String[] nomes = nome.split(" ");     
        nomes[nomes.length - 1] = nomes[nomes.length - 1].toUpperCase();
        
        System.out.print(nomes[nomes.length - 1] +", ");
        for (int i = 0; i < nomes.length - 1; i++) {
            System.out.print(nomes[i] +" ");
        }
        System.out.println("");
        System.exit(0);
    }
    
}
