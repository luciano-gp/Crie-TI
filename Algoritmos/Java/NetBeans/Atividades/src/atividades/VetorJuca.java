package atividades;

/**
 * @author lucianoo_gp
 */
public class VetorJuca {
    
    public static void main(String[] args) {
        
        String[] nome = new String[5];
        int contJuca = 0;
        
        for (int i = 0; i < nome.length; i++) {
            nome[i] = Entrada.leiaString("Digite um nome: ");
            if (nome[i].equalsIgnoreCase("juca")){
                contJuca++;
            }
        }
        
        System.out.println("Total de Jucas: " + contJuca);
        System.out.print("Nomes informados:  ");
        for (int i = 0; i < nome.length; i++) {
            System.out.print(nome[i] + "  ");
        }
        
        System.exit(0);
        
    }
    
}
