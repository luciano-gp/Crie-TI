package atividades;

/**
 * @author lucianoo_gp
 */
public class luciano3 {

    public static void main(String[] args) {

        //Cartela premiada definida manualmente
        int[] cartelaPremiada = {4, 8, 17, 24, 39, 44, 53, 54, 59, 62, 74, 77, 83, 84, 88};
        //Cartela premiada definida randomicamente (como o sistema funciona em looping, ela só será alterada caso o sistema seja reiniciado)
//        int[] cartelaPremiada = new int[15];
//        for (int i = 0; i < cartelaPremiada.length; i++) {
//            cartelaPremiada[i] = ((int) (Math.random() * 100));
//        }
        int[] cartelaJogador = new int[20];
        int acertos = 0;
        
        //Evita que o "0" seja identificado como um número repetido na primeira vez que é digitado
        for (int i = 0; i < cartelaJogador.length; i++) {
            cartelaJogador[i] = -1;
        }
        
        for (int k = 0; k < 2; k++) {
            
        for (int i = 0; i < cartelaJogador.length; i++) {
            cartelaJogador[i] = Entrada.leiaInt("Palpite " + (i + 1));
            
            //Garante o interval 0 - 100
            while ((cartelaJogador[i] < 0) || (cartelaJogador[i] > 100)){
                Mensagem.erro("Número fora do intervalo 0 - 100, digite novamente");
                cartelaJogador[i] = Entrada.leiaInt("Palpite " + (i + 1));
            }
            
            //Garante que não terão números repetidos
            for (int j = 0; j < cartelaJogador.length; j++) {
                while ((cartelaJogador[i] == cartelaJogador[j]) && (i != j))  {
                    Mensagem.erro("Número repetido, digite novamente");
                    cartelaJogador[i] = Entrada.leiaInt("Palpite " + (i + 1));
                    j = 0;
                } 
            }
           
            //Conta os acertos
            for (int j = 0; j < cartelaPremiada.length; j++) {
                if (cartelaJogador[i] == cartelaPremiada[j]) {
                    acertos++;
                }
            }
            
            //Encerra o jogo quando o usuário atinge 15 acertos
            if (acertos == 15) {
                i = cartelaJogador.length;
            }
        }

        //Mensagem de premiação (ou não)
        if ((acertos == 10) || (acertos == 11) || (acertos == 12)) {
            Mensagem.informacao("Prêmio Bronze - 10 acertos");
        } else if ((acertos == 13) || (acertos == 14)) {
            Mensagem.informacao("Prêmio Prata - 13 acertos");
        } else if (acertos >= 15) {
            Mensagem.informacao("Prêmio Ouro - 15 acertos");
        } else {
            Mensagem.informacao("Sem premiação");
        }
        
        Mensagem.aviso("Próximo jogador");
        k = 0;
        }

    }

}
