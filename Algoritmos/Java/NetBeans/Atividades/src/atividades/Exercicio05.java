package atividades;

/**
 * @author lucianoo_gp
 */
public class Exercicio05 {

    public static void main(String[] args) {

        int num = Entrada.leiaInt("De qual número você deseja ver a tabuada?");

        for (int i = 1; i <= 10; i++) {

            int x = (num * i);
            System.out.println(i + " x " + num + " = " + x);
            
        }
        
    System.exit(0);

    }

}
