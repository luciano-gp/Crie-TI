package aula04;

/**
 *
 * @author lucianoo_gp
 */
public class TesteAreas {
    
    public static void main(String[] args) {
        
        Areas objArea = new Areas();
    
        objArea.setBase(5.2);
        objArea.setAltura(10);
        
        System.out.println("Área Retângulo: " + objArea.calcAreaRetangulo());
        System.out.println("Área Triângulo: " + objArea.calcAreaTriangulo());
    }
    
}
