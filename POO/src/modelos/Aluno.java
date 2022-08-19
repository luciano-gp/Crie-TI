package modelos;

/**
 *
 * @author lucianoo_gp
 */
public class Aluno {
    
    private int idade;
    private String nome;
    private double altura;
    private char sexo;

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }
    
    public void fazAniversario () {
        idade++;
    }
    
    public void imprimir () {
        StringBuilder imprimir = new StringBuilder();
        
        imprimir.append(nome);
        imprimir.append(" - ");
        imprimir.append(idade);
        imprimir.append(" anos - ");
        imprimir.append(altura);
        imprimir.append("m - sexo: ");
        imprimir.append(sexo);
        
        System.out.println(imprimir.toString()); 
    }
    
}
