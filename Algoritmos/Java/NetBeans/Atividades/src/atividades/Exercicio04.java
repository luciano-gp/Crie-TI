package atividades;

/**
 * @author lucianoo_gp
 */
public class Exercicio04 {

    public static void main(String[] args) {

        int contHomem = 0, contMulher = 0, contVinte = 0;
        double medGrupo = 0, medHomem = 0;
        char sexo;

        for (int i = 1; i <= 5; i++) {

            int idade = Entrada.leiaInt("Qual a idade da pessoa " + i + "?");
            sexo = Entrada.leiaChar("Sexo masculino = m | Sexo feminino = f");
                while (( sexo != 'm' ) && ( sexo != 'f' )) {
                sexo = Entrada.leiaChar("Digite 'm' ou 'f'");
                }

            if (sexo == 'm') {
                contHomem++;
                medHomem = (medHomem + idade);
            } else if (sexo == 'f') {
                contMulher++;
                if (idade >= 20) {
                    contVinte++;
                }
            }

            medGrupo = (medGrupo + idade);
            
        }

        medHomem = (medHomem / contHomem);
        medGrupo = (medGrupo / 5);

        System.out.println(contHomem + " homens foram cadastrados");
        System.out.println(contMulher + " mulheres foram cadastradas");
        System.out.println("A média de idade do grupo é de: " + medGrupo + " anos");
        System.out.println("A média de idade dos homens é de: " + medHomem + " anos");
        System.out.println(contVinte + " mulheres tem 20 anos ou mais");
        System.exit(0);

    }

}
