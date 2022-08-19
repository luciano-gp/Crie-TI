package aula03;

import ferramentas.Entrada;

/**
 *
 * @author lucianoo_gp
 */
public class TestePessoa {
    
    public static void main(String[] args) {
        
        Pessoa objPessoa1 = new Pessoa();
        Pessoa objPessoa2 = new Pessoa();
        
        objPessoa1.setNome(Entrada.leiaString("Digite o nome da pessoa:"));
        objPessoa1.setSexo(Entrada.leiaChar("Digite o sexo da pessoa:\n[f] - feminino\n[m] - masculino"));
        objPessoa1.setPeso(Entrada.leiaDouble("Digite o peso da pessoa:"));
        objPessoa1.setIdade(Entrada.leiaInt("Digite a idade da pessoa:"));
        
        objPessoa2.setNome(Entrada.leiaString("Digite o nome da pessoa:"));
        objPessoa2.setSexo(Entrada.leiaChar("Digite o sexo da pessoa:\n[f] - feminino\n[m] - masculino"));
        objPessoa2.setPeso(Entrada.leiaDouble("Digite o peso da pessoa:"));
        objPessoa2.setIdade(Entrada.leiaInt("Digite a idade da pessoa:"));
        
        System.out.println("Pessoa 1 : " + objPessoa1);
        System.out.println();
        System.out.println("Pessoa 2 : " + objPessoa2);
        
        //Testar se os nomes são iguais
        if (objPessoa1.getNome().equalsIgnoreCase(objPessoa2.getNome())) {
            System.out.println("\nOs nomes são iguais");
        } else {
            System.out.println("\nOs nomes são diferentes");
        }
        
        //Testar qual nome possui mais caracteres
        if (objPessoa1.getNome().length() > objPessoa2.getNome().length()) {
            System.out.println(objPessoa1.getNome() + " possui mais caracteres");
        } else if (objPessoa1.getNome().length() < objPessoa2.getNome().length()) {
            System.out.println(objPessoa2.getNome() + " possui mais caracteres");
        } else {
            System.out.println("Ambos nomes possuem a mesma quantidade de caracteres");
        }
        
        System.exit(0);
    }
    
}
