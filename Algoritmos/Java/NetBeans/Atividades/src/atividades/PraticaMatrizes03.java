package atividades;

/**
 * @author lucianoo_gp
 */
public class PraticaMatrizes03 {
    
    public static void main(String[] args) {
        
        int[][] matriz = new int [6][3];
        int iMaior = 0;
        int jMaior = 0;
        int iMenor = 0;
        int jMenor = 0;
        int maior = 0;
        int menor = 0;
        
        PreencheMatriz.random100(matriz);
        ImprimeMatriz.matInteiros(matriz);
        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                if (matriz[i][j] > maior) {
                    iMaior = (i + 1);
                    jMaior = (j + 1);
                    maior = matriz[i][j];
                }
                if ((i == 0) && (j == 0)) {
                    menor = matriz[i][j];
                }
                if (matriz[i][j] < menor) {
                    iMenor = (i + 1);
                    jMenor = (j + 1);
                    menor = matriz[i][j];
                }
            }
        }
        
        System.out.println("O maior número da matriz é o " + maior + " localizado na linha " + iMaior + " e na coluna " + jMaior);
        System.out.println("O menor número da matriz é o " + menor + " localizado na linha " + iMenor + " e na coluna " + jMenor);
        System.exit(0);
        
    }
    
}
