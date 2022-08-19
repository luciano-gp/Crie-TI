package atividades;

/**
 * @author lucianoo_gp
 */
public class IMC_Metodos {

    public static void main(String[] args) {

        char sexo = Entrada.leiaChar("Qual o seu sexo?\n"
                + "[F] Feminino\n"
                + "[M] Masculino\n");
        while ((sexo != 'm') && (sexo != 'f') && (sexo != 'M') && (sexo != 'F')) {
            sexo = Entrada.leiaChar("Qual o seu sexo?\n"
                    + "[F] Feminino\n"
                    + "[M] Masculino\n");
        }
        double altura = Entrada.leiaDouble("Qual sua altura? (em m)");
        double peso = Entrada.leiaDouble("Qual seu peso? (em kg)");

        double imc = calculoImc(altura, peso);

        if ((sexo == 'f') || (sexo == 'F')) {
            if (imc < 19.1) {
                Mensagem.informacao("Você está abaixo do peso");
            } else if (imc > 25.8) {
                Mensagem.informacao("Você está acima do peso");
            } else {
                Mensagem.informacao("Você está no peso ideal");
            }                
        } else {
            if (imc < 20.7) {
                Mensagem.informacao("Você está abaixo do peso");
            } else if (imc > 26.4) {
                Mensagem.informacao("Você está acima do peso");
            } else {
                Mensagem.informacao("Você está no peso ideal");
            }
        }
        
        System.exit(0);
    }

    public static double calculoImc(double alt, double pes) {
        double calcImc = (pes / (alt * alt));
        return calcImc;
    }

}
