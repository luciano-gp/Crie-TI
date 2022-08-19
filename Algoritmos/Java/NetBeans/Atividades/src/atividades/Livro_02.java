/*2. Dadas as temperaturas que foram registradas diariamente durante uma semana,
deseja-se determinar em quantos dias dessa semana a temperatura esteve acima da média.
A solução para esse problema envolve os seguintes passos:
a) obter os valores das temperaturas;
b) calcular a média desses valores;
c) verificar quantos deles são maiores que a média.
 */
package atividades;

/**
 *
 * @author lucianoo_gp
 */
public class Livro_02 {
    
    public static void main(String[] args) {
        
        double[] temp = new double[7];
        double totalTemp = 0;
        int diasAcima = 0;
        
        for (int i = 0; i < temp.length; i++) {
            temp[i] = Entrada.leiaDouble("Temperatura do dia " + (i+1));
            totalTemp = (totalTemp + temp[i]);
        }
        
        totalTemp = (totalTemp / temp.length);
        
        for (int i = 0; i < temp.length; i++) {
            if (temp[i] > totalTemp) {
                diasAcima++;
            }
        }
        
        System.out.printf(diasAcima + " dia(s) acima da temperatura média de %.2f °C" , totalTemp);
        System.exit(0);
    }
    
}
