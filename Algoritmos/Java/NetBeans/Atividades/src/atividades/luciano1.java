package atividades;

/**
 * @author lucianoo_gp
 */
public class luciano1 {
    
    public static void main(String[] args) {
        
        String[] nomes = new String[10];
        int contA = 0, contS = 0;
        
        for (int i = 0; i < nomes.length; i++) {
            nomes[i] = Entrada.leiaString("Digite o nome da pessoa " + (i + 1));
            nomes[i] = nomes[i].toLowerCase();
            if ((nomes[i].charAt(0) == 'a') && (nomes[i].charAt(nomes[i].length() - 1) == 's')) {
                contA++;
                contS++;
            } else if (nomes[i].charAt(0) == 'a') {
                contA++;
            } else if ((nomes[i].charAt(nomes[i].length() - 1) == 's')) {
                contS++;
            }
        }
        
        System.out.println("Quantidade de nomes que iniciam com 'A': " + contA);
        System.out.println("Quantidade de nomes que terminam com 's': " + contS);
        System.exit(0);
        
    }
    
}
