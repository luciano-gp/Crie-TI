package atividades;

/**
 * @author lucianoo_gp
 */
public class rapidinha02_v3 {

    public static void main(String[] args) {

        String nome = Entrada.leiaString("Digite um nome:");
        StringBuilder nomeConc = new StringBuilder();
        int i = 0;
        int contNome = 0;

        while (nome.charAt(i) != ' ') {
            contNome++;
            i++;
        }

        for (int j = (contNome + 1); j < nome.length(); j++) {
            nomeConc.append(Character.toUpperCase(nome.charAt(j)));
        }
        
        nomeConc.append(", ");
        nomeConc.append(Character.toUpperCase(nome.charAt(0)));
        
        for (int j = 1; j < contNome; j++) {
            nomeConc.append(Character.toLowerCase(nome.charAt(j)));
        }
        
        System.out.println(nomeConc);
        
        System.exit(0);
        
    }

}
