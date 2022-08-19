package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Pratica2305_03 {
    
    public static void main(String[] args) {
        int idade;
        
        idade = Entrada.leiaInt("Digite a idade do nadador: ");
        
        while ((idade < 5) || (idade > 80)) {
            idade = Entrada.leiaInt("Idade INVÁLIDA! Digite um valor entre 5 e 80");
        }
        
        Mensagem.informacao("O nadador é da categoria " + categoria(idade));
        System.exit(0);
    }
    
    public static String categoria (int num) {
        if (num <= 7) {
            return ("INFANTIL A");
        } else if (num <= 10) {
            return ("INFANTIL B");
        } else if (num <= 13) {
            return ("JUVENIL A");
        } else if (num <= 17) {
            return ("JUVENIL B");
        } else {
            return ("ADULTO");
        }
    }
    
}
