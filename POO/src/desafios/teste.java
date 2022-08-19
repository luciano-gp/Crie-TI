package desafios;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

/**
 *
 * @author lucianoo_gp
 */
public class teste {

    public static void main(String[] args) {
        
        ArrayList<Integer> posicao = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8));
        
        Collections.shuffle(posicao);
        
        for (int i = 0; i < posicao.size(); i++) {
            System.out.println(posicao.get(i) + "\t");
        }
        
    }

}
