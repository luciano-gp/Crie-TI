package atividades;

/**
 * @author lucianoo_gp
 */
public class rapidinha02 {

    public static void main(String[] args) {

        String nome = Entrada.leiaString("Digite uma palavra");
        char[] nomeOrdenado = new char[nome.length()];        
        char[] nomeInvertido = new char[nome.length()];
        int j = 0;
        int cont1 = 0;
        
        for (int i = nome.length()-1; i >= 0; i--) {
            nomeInvertido[j] = (nome.charAt(i));
            j++;
        }
        
        for (int i = 0; i < nome.length(); i++) {
            if (nomeInvertido[i] != ' ') {
            cont1++;
            } else {
                i =+ 100;
            }
        }

        int cont2 = cont1;

        for (int i = 0; i < cont1; i++) {
            nomeOrdenado[cont2] = nomeInvertido[i];
            cont2--;
        }
        
        for (int i = 0; i <= cont1; i++) {
            System.out.print(Character.toUpperCase(nomeOrdenado[i]));
        }
        
        System.out.printf(", ");
        
        int cont3 = nome.length() - 1;
        System.out.print(Character.toUpperCase(nomeInvertido[cont3]));
        cont3--;
        while (nomeInvertido[cont3] != ' '){
            System.out.print(Character.toLowerCase(nomeInvertido[cont3]));
            cont3--;
        }       
        
        System.exit(0);

    }
}