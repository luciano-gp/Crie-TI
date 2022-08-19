/*
Dada uma matriz 6x6 de reais preenchida no método principal, escreva funções para realizar as
seguintes tarefas: a - calcular a média dos elementos da última linha; b - determinar o menor
elemento da última coluna; c - apresentar os elementos contidos na diagonal principal;
*/
package atividades;

/**
 * @author lucianoo_gp
 */
public class ProvaFinal02 {
    
    public static void main(String[] args) {
        
        double[][] matriz = new double[6][6];
        
        random10(matriz);
        imprimeMat(matriz);
        System.out.printf("Média da última linha: %.2f%n" , mediaUlt(matriz));
        System.out.println("Menor elemento da última coluna: " + menElem(matriz));
        imprimeDiag(matriz);     
        
        System.exit(0);
    }
    
    public static double[][] random10(double[][] matriz) {
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                matriz[i][j] = ((int) (Math.random() * 10));
            }
        }        
        return matriz;
    }
    
    public static void imprimeMat(double[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            System.out.print("|");
            for (int j = 0; j < 6; j++) {
                System.out.printf("  %.2f  |" , matriz[i][j]);
            }
            System.out.println("\n");
        }
    }
    
    public static double mediaUlt(double[][] matriz) {
        double media = 0;
        for (int i = 0; i < (6); i++) {
            media = (media + matriz[5][i]);
        }
        media = (media / 6);
        return media; 
    }
    
    public static double menElem(double[][] matriz) {
        double temp = 100;
        for (int i = 0; i < matriz.length; i++) {
            if (matriz[i][5] < temp) {
                temp = matriz[i][5];
            }
        }
        return temp;
    }
    
    public static void imprimeDiag(double[][] matriz) {
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                if (i == j) {
                    System.out.print(matriz[i][j]);
                } else {
                    System.out.print("\t");
                }
            }
            System.out.println("");
        }
    }
       
}
