package atividades;

/**
 * @author lucianoo_gp
 */
public class ExemploMatrizes {
    
    public static void main(String[] args) {
        
        int [][] num = new int [4][5];
        
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 5; j++) {
                num [i][j] = ((int) (Math.random() * 10));
                            //Entrada.leiaInt("Linha: " + i + " Coluna: " + j);
            }
        }
        
        int i =0;
        while (i < 4) {
            for (int j = 0; j < 5; j++) {
                System.out.print(num[i][j] + "\t");
            }
            System.out.println();
            i++;
        }
        
        System.exit(0);
    }
    
}
