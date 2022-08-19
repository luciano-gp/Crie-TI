package atividades;

/**
 * @author lucianoo_gp
 */
public class CalculadoraProcedimentosRetorno {

    public static void main (String [] args) {
        
        double num1 = Entrada.leiaDouble("Digite o primeiro numero");
        double num2 = Entrada.leiaDouble("Digite o segundo numero");
        int op = Entrada.leiaInt("Escolha a operação que deseja fazer: [ 1 = soma ] [ 2 = subtração ] [ 3 = multiplicação [ 4 = divisão ]");
        double result=0;
        
        if (op == 1) {
             result = soma (num1,num2);
        }
        if (op == 2) {
            result = sub (num1,num2);
        }
        if (op == 3) {
             result = multi (num1,num2);
        }
        if (op == 4) {
           result = div (num1,num2);
        }
        System.out.println ("O resultado da operação é:" + result);
        System.exit(0);
    }

        public static double soma (double n1,double n2)
        {
            double r = n1+n2;
            return r;
        }

        public static double sub (double n1,double n2) {
            double r = n1-n2;
            return r;
        }

        public static double multi (double n1,double n2){
            double r= n1*n2;
            return r;
        }
        public static double div (double n1,double n2) {
            double r = n1/n2;
            return r;
        }
    }

