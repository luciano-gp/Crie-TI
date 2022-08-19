package atividades;

/**
 * @author lucianoo_gp
 */
public class rapidinha02_v2 {

    public static void main(String[] args) {

        String nome = Entrada.leiaString("Digite um nome:");
        int i = 0;
        int contNome = 0;

        while (nome.charAt(i) != ' ') {
            contNome++;
            i++;
        }

        for (int j = (contNome + 1); j < nome.length(); j++) {
            System.out.print(Character.toUpperCase(nome.charAt(j)));
        }
        
        System.out.print(", ");
        System.out.print(Character.toUpperCase(nome.charAt(0)));
        
        for (int j = 1; j < contNome; j++) {
            System.out.print(Character.toLowerCase(nome.charAt(j)));
        }

        System.exit(0);
        
    }

}
