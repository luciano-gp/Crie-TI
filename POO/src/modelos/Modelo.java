package modelos;

/**
 *
 * @author lucianoo_gp
 */
public class Modelo {
    
    private String marca;
    private String modelo;

    public Modelo() {
        
    }
    
    public Modelo(String marca, String modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    @Override
    public String toString() {
        StringBuilder texto = new StringBuilder();
        texto.append(marca);
        texto.append(" ");
        texto.append(modelo);
        return texto.toString(); 
    }
    
    
    
    
    
}
