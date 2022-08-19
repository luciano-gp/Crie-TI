package aula03;

/**
 *
 * @author lucianoo_gp
 */
public class Pessoa {
    
    private String nome;
    private char sexo;
    private double peso;
    private int idade;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
//        if (sexo == 'm') {
//            sexo = 'M';
//        } else if (sexo == 'f') {
//            sexo = 'F';
//        }
        StringBuilder sexo2 = new StringBuilder();
        sexo2.append(sexo);
        String sexo3 = sexo2.toString();
        sexo3 = sexo3.toUpperCase();
        sexo = sexo3.charAt(0);
        this.sexo = sexo;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
        
    @Override
    public String toString() {
        
        StringBuilder textoPessoa = new StringBuilder();
        textoPessoa.append("Nome: ");
        textoPessoa.append(nome);
        textoPessoa.append("\nSexo: ");
        textoPessoa.append(sexo);
        textoPessoa.append("\nPeso: ");
        textoPessoa.append(peso);
        textoPessoa.append(" Kg");
        textoPessoa.append("\nIdade: ");
        textoPessoa.append(idade);
        textoPessoa.append(" anos");
        
        return textoPessoa.toString();
    }
    
}
