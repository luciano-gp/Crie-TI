package atividades;

public class SomaJucas {

    public static void main(String[] args) {

        int juca = 0;

        for (int i = 1; i <= 5; i++) {
            
            String nome = Entrada.leiaString("Qual o nome da pessoa?");

            if (nome.equalsIgnoreCase("juca")) {
                juca++;
            }

        }
        
        System.out.println(juca + " juca(s)");
        System.exit(0);
    }
    
}
