package aula02;

import java.util.ArrayList;
import modelos.Carro;
import modelos.Modelo;

/**
 *
 * @author lucianoo_gp
 */
public class ManipularObjeto {

    public static void main(String[] args) {

        Modelo objModelo1 = new Modelo("Fiat", "Bravo");
        Modelo objModelo2 = new Modelo("VW", "Golf");
        Modelo objModelo3 = new Modelo("Peugeot", "207");

        Carro objCarro1 = new Carro("ABC1234", "Azul", objModelo1, 2013, 2012);
        Carro objCarro2 = new Carro("XYZ0000", "Vermelho", objModelo2, 2001, 2001);
        Carro objCarro3 = new Carro("NAO6666", "Branco", objModelo3, 2009, 2009);
//        objCarro1.setNumero_chassi("ABC1234");
//        objCarro1.setCor("Azul");
//        objCarro1.setMarca("Fiat");
//        objCarro1.setModelo("Bravo");
//        objCarro1.setAno_modelo(2013);
//        objCarro1.setAno_fabricacao(2012);

        ArrayList<Carro> carros = new ArrayList<>();
        carros.add(objCarro1);
        carros.add(objCarro2);
        carros.add(objCarro3);

        System.out.println(objCarro1);
        System.out.println(objCarro2);
        System.out.println(objCarro3);

        //Testar quais dos 3 carros é mais novo?
        Carro objCarroTemp = new Carro();
        objCarroTemp = objCarro1;
        for (int i = 1; i < carros.size(); i++) {
            if ((i != 0) && (objCarro2.getAno_modelo() > objCarro1.getAno_modelo()) && (objCarro2.getAno_modelo() > objCarro3.getAno_modelo())) {
                objCarroTemp = objCarro2;
            } else if ((i != 0) && (objCarro3.getAno_modelo() > objCarro1.getAno_modelo()) && (objCarro3.getAno_modelo() > objCarro2.getAno_modelo())) {
                objCarroTemp = objCarro3;
            }
        }

        System.out.println("O carro mais novo é o " + objCarroTemp.getModelo());

    }

}
