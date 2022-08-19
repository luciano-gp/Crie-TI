package aula04;

/**
 *
 * @author lucianoo_gp
 */
public class Areas {
    
    private double base;
    private double altura;
    
    public Areas(){
        
    }
    
    public Areas(double base, double altura) {
        this.base = base;
        this.altura = altura;
    }

    public double getBase() {
        return base;
    }

    public void setBase(double base) {
        this.base = base;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }
    
    public double calcAreaRetangulo(){
        return (base * altura);
    }
    
    public double calcAreaTriangulo(){
        return ((base * altura) / 2);
    }
    
}
