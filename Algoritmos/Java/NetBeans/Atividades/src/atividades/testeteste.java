/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividades;

/*
 * @author lucianoo_gp
 */
public class testeteste {
    
    public static void main(String[] args) {
        
        int[][] velha = new int[3][3];
        int jogador = 0;
        
        preencher(velha);
        mostra(velha);
        
        do {
            if (jogador == 0) {
                Mensagem.informacao("Jogador 1");
            } else {
                Mensagem.informacao("Jogador 2");
            }
        int op = Entrada.leiaInt("Qual posição?");
        while ((op > 9) || (op < 1)) {
            Mensagem.erro("Posição inválida");
            op = Entrada.leiaInt("Qual posição");            
        }
        System.out.println("\n");
        for (int i = 0; i < velha.length; i++) {
            for (int j = 0; j < velha[0].length; j++) {
                if ((velha[i][j] == op) && (jogador == 0)) {
                    velha[i][j] = 0;
                    jogador++;
                } else if ((velha[i][j] == op) && (jogador == 1)) {
                    velha [i][j] = -1;
                    jogador--;
                }
            }        
        }
        mostra(velha);
        } while (verifica(velha) == 666);
        
        if (verifica(velha) == 0) {
            Mensagem.aviso("Vencedor - jogador 1");
        } else if (verifica(velha) == -1) {
            Mensagem.aviso("Vencedor - jogador 2");
        }
        
        System.exit(0);
        
        
    }
    
    public static int[][] preencher(int[][] jogo) {
        
        for (int i = 0; i < jogo.length; i++) {
            for (int j = 0; j < jogo[0].length; j++) {
                jogo[i][j] = ((i * jogo[0].length) + j + 1);
            }         
        }
        return jogo;        
    }
    
    public static void mostra(int[][] jogo) {
        
        for (int i = 0; i < jogo.length; i++) {
            System.out.print("|");
            for (int j = 0; j < jogo[0].length; j++) {
                System.out.print("  " + (jogo[i][j]) + "  |"); 
            }
            System.out.println("\n-------------------");            
        }
    }
    
    public static int verifica(int[][] jogo) {

        for (int i = 0; i < jogo.length; i++) {
            if ((jogo[i][0] == 0) && (jogo[i][1] == 0) && ((jogo[i][2] == 0))) {
            return 0;
        }
            if ((jogo[i][0] == -1) && (jogo[i][1] == -1) && ((jogo[i][2] == -1))) {
            return -1;
        }
            if ((jogo[0][i] == 0) && (jogo[1][i] == 0) && ((jogo[2][i] == 0))) {
            return 0;
        }
            if ((jogo[0][i] == -1) && (jogo[1][i] == -1) && ((jogo[2][i] == -1))) {
            return -1;
        }
            
        }
        
        for (int i = 0; i < jogo.length; i++) {
            for (int j = 0; j < jogo[0].length; j++) {
               if ((jogo[0][0] == 0) && (jogo[1][1] == 0) && ((jogo[2][2] == 0))) {
            return 0; 
            }
                if ((jogo[0][0] == -1) && (jogo[1][1] == -1) && ((jogo[2][2] == -1))) {
            return -1;
            }      
                if ((jogo[0][2] == 0) && (jogo[1][1] == 0) && ((jogo[2][0] == 0))) {
            return 0; 
            }
                if ((jogo[0][2] == -1) && (jogo[1][1] == -1) && ((jogo[2][0] == -1))) {
            return -1;
            }  
        }       
        }
        return 666; 
    }
}
