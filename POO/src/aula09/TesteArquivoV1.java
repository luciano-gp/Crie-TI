package aula09;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

/**
 * @author lucianoo_gp
 */
public class TesteArquivoV1 {

    public static void main(String[] args) {

        FileWriter fileWriter;
        BufferedWriter bufferWriter;
        FileReader fileReader;
        BufferedReader bufferReader;
        try {
            //Criar arquivo
            fileWriter = new FileWriter("arquivo.txt");
            bufferWriter = new BufferedWriter(fileWriter);
            bufferWriter.write("Olá mundo\n");
            bufferWriter.write("Marcolas\n");
            bufferWriter.write("PQP");
            bufferWriter.close();

            //Ler arquivo
            fileReader = new FileReader("arquivo.txt");
            bufferReader = new BufferedReader(fileReader);

            String linha;

            do {
                linha = bufferReader.readLine();

                if (linha != null) {
                    System.out.println(linha);
                }
                
            } while (linha != null);

            System.out.println("Terminou de ler o arquivo");

        } catch (IOException ex) {
            System.out.println("Erro ao criar arquivo " + ex.getMessage());
        }

    }

}
