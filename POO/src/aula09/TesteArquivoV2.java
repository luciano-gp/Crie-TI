package aula09;

import ferramentas.Arquivo;

/**
 *
 * @author lucianoo_gp
 */
public class TesteArquivoV2 {

    public static void main(String[] args) {

        Arquivo objArquivo = new Arquivo("teste.txt");

        objArquivo.abrirEscrita();
        objArquivo.escreverLinha("Salve salve família");
        objArquivo.escreverLinha("Aqui é o Monark");
        objArquivo.escreverLinha("Falamos diretamente dos Studios Flow");
        objArquivo.escreverLinha("Patrocínio do iFood");
        objArquivo.fecharArquivo();
        objArquivo.abrirLeitura();

        String linha;
        do {
            linha = objArquivo.lerLinha();

            if (linha != null) {
                System.out.println(linha);
            }

        } while (linha != null);
        
        objArquivo.fecharArquivo();
        
    }

}
