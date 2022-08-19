package atividades;

/**
 * @author lucianoo_gp
 */
public class Exercicio03 {

    public static void main(String[] args) {

        double medIdade = 0;
        int contMais = 0, contMenos = 0, maiorIdade = 0, idade = 0;

        for (int i = 1; i <= 10; i++) {
            idade = Entrada.leiaInt("Qual a sua idade?");

            if (idade >= 18) {
                contMais++;
            } else if (idade <= 5) {
                contMenos++;
            }

            medIdade = (medIdade + idade);

            if (maiorIdade < idade) {
                maiorIdade = idade;
            }

        }

        medIdade = (medIdade / 10);

        System.out.println("A média de idade das pessoas é de: " + medIdade + " anos.");
        System.out.println(contMais + " pessoas tem 18 anos ou mais.");
        System.out.println(contMenos + " pessoas tem 5 anos ou menos.");
        System.out.println("A maior idade registrada foi de: " + maiorIdade + " anos");
        System.exit(0);

    }
}
