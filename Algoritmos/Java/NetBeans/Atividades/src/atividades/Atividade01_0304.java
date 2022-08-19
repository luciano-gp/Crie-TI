package atividades;

/**
 * @author lucianoo_gp
 */

public class Atividade01_0304 {
    
    public static void main(String[] args) {
     
        int x = Entrada.leiaInt("De qual número você deseja ver a tabuada?");
        tabuada (x);
        System.exit(0);
    } 
    
    public static void tabuada (int num) {
        for (int i = 1; i <= 10; i++) {
            int total = (num * i);
            System.out.println(i + " x " + num + " = " + total);
        }
    }
    
}
