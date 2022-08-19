package atividades;

/**
 * @author lucianoo_gp
 */
public class VetoresAula10String {
    
    public static void main(String[] args) {
        
        String[] nome = new String[5];
        int contA = 0;
        
        for (int i = 0; i < nome.length; i++) {
            nome[i] = Entrada.leiaString("Digite um nome: ");
        }
        
        for (int i = 0; i < nome.length; i++) {
            for (int j = 0; j < nome[i].length(); j++) {
                if (((nome[i].charAt(j)) == 'a') || ((nome[i].charAt(j)) == 'A')) {
                    contA++;
                }
            }
        }
        
        System.out.println("Nos nomes digitados, econtramos " + contA + " vezes a letra 'A'");
        System.exit(0);
        
    }
    
}
