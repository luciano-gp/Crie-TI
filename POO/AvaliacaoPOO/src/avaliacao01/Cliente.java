package avaliacao01;

/**
 *
 * @author lucianoo_gp
 */
public class Cliente {
    
    private String nome;
    private String sexo;
    private int idade;
    private double peso;
    private double altura;
    private String natural;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public String getNatural() {
        return natural;
    }

    public void setNatural(String natural) {
        this.natural = natural;
    }
    
    @Override
    public String toString() {
        return ("------------------------\n" + "Nome: " + nome + "\nsexo: " + sexo + "\nIdade: " + idade + "\nNacionalidade: " + natural + 
         "\nAltura: " + altura + "m" + "\nPeso: " + peso + "kg" + "\n------------------------");
    }
    
}
