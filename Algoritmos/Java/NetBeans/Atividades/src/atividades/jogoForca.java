package atividades;

/**
 * @author lucianoo_gp
 */
public class jogoForca {

    public static void main(String[] args) {

        String palavra = Entrada.leiaString("Digite uma palavra:");
        palavra = palavra.toLowerCase();
        char[] palavraVetor = new char[palavra.length()];
        int vida = 6;
        int acertos = 0;
        int cont = 0;

        for (int i = 0; i < (palavra.length()); i++) {
            palavraVetor[i] = '_';
        }

        Mensagem.informacao("O jogo vai começar!\nA palavra tem " + palavra.length() + " letras!");
        
        while ((vida > 0) && (acertos < palavra.length())) {

            char letra = Entrada.leiaChar("Digite uma letra: ");
            
            for (int i = 0; i < palavraVetor.length; i++) {
                while (letra == palavraVetor[i]) {
                    Mensagem.erro("Letra repetida");
                    letra = Entrada.leiaChar("Digite uma letra: ");
                }
            }

            for (int i = 0; i < palavraVetor.length; i++) {
                if (letra == palavra.charAt(i)) {
                    palavraVetor[i] = palavra.charAt(i);
                    acertos++;
                    cont++;
                }
            }

            if (cont == 0) {
                vida--;
            }

            cont = 0;

            for (int i = 0; i < palavraVetor.length; i++) {
                System.out.print("  " + palavraVetor[i]);
            }
            
            System.out.println("\nVidas restantes: " + vida);
            vida(vida);
            System.out.println("");
        }

        if (vida == 0) {
            Mensagem.aviso("Morreu");
            Mensagem.informacao("A palavra correta era '" + palavra + "'");
        } else {
            Mensagem.informacao("Venceu");
        }
        
        System.exit(0);

    }

    public static void vida(int vida) {
        switch (vida){
            case 5 -> System.out.print("O" + "\terrou, f...");
            case 4 -> System.out.print(" O\n |" + "\tcarai, sou cotoco");
            case 3 -> System.out.print(" O\n/|" + "\tmelhor um braço do que nada, né?");
            case 2 -> System.out.print(" O\n<|>" + "\tja tenho dois braços, pode acertar uma agora");
            case 1 -> System.out.print(" O\n<|>\n/" + "\tFALA 42, PELO AMOR DE DEUS");
            case 0 -> System.out.print(" O\n(|)\n| |" + "\tR.I.P");
            default -> System.out.println("");
        }
    }
    
}
