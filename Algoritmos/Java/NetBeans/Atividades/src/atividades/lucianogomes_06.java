package atividades;

/**
 * @author lucianoo_gp
 */
public class lucianogomes_06 {

    public static void main(String[] args) {

        int cont = 0, filhos = 0;
        double contSalario = 0;
        double salario = 0, salarioTotal = 0, menorSalario = 9999999, mediaFilhos = 0, faixaSalario = 0;

        while (salario >= 0) {

            salario = Entrada.leiaDouble("Qual seu salário?");
            
            if (salario >= 0) {
                filhos = Entrada.leiaInt("Quanto filhos você tem?");
            }

            if ((salario <= 1500) && (salario >= 0)) {
                contSalario++;
            }

            salarioTotal = (salarioTotal + salario);
            mediaFilhos = (mediaFilhos + filhos);
            cont++;

            if ((salario < menorSalario) && (salario >= 0)) {
                menorSalario = salario;
            }

        }

        mediaFilhos = ((mediaFilhos - filhos) / (cont - 1));
        salarioTotal = ((salarioTotal - salario) / (cont - 1));
        faixaSalario = ((contSalario / (cont - 1)) * 100);

        System.out.println("A média salarial é de: R$" + salarioTotal);
        System.out.println("A média do número de filhos é de: " + mediaFilhos + " filhos");
        System.out.println("O menor salário registrado foi de: R$" + menorSalario);
        System.out.println("A porcentagem de pessoas que recebem até R$1500,00 é de: " + faixaSalario + "%");
        System.exit(0);
        
    }

}
