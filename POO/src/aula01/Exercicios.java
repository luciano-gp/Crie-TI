package aula01;

/**
 *
 * @author lucianoo_gp
 */
public class Exercicios {
    
    //public = É um modificador de acesso, permite que o método fique visível para outras classes
    //private = É um modificador de acesso, permite que o método seja usado apenas pela própria classe
    //protected = É um modificador de acesso, ?
    //static = permite que o método seja invocado sem necessidade de criar uma nova instância
    //void = o método em questão não tem retorno
    public static void main(String[] args) {
        
        int variavel1 = 30;
        int variavel2 = 28;
        Operacoes operacoes = new Operacoes();
        
        String resultadoFinal = imprimirExemplos(variavel1, variavel2);
        
        System.out.println(resultadoFinal);
        System.out.println(operacoes.somar(variavel1, variavel2));
        System.out.println(operacoes.subtrair(variavel1, variavel2));
        System.exit(0);
    }
    
    private static String imprimirExemplos(int var1, int var2) {
        
        //Inicialização de variável
        StringBuilder resultadoFinal = new StringBuilder();
        
        //Mostra valor de var1
        resultadoFinal.append("var1 = ");
        resultadoFinal.append(var1);
        resultadoFinal.append("\n");        
        
        //Mostra valor de var2
        resultadoFinal.append("var2 = ");
        resultadoFinal.append(var2);
        resultadoFinal.append("\n"); 
        
        //Testa se igual
        resultadoFinal.append("var1 == var2 -> ");
        resultadoFinal.append(var1 == var2);
        resultadoFinal.append("\n"); 
        
        //Testa se igual mas retorna o contrário, devido ao sinal de negação "!"
        resultadoFinal.append("!(var1 == var2) -> ");
        resultadoFinal.append( !(var1 == var2));
        resultadoFinal.append("\n"); 
        
        //Testa se diferente
        resultadoFinal.append("var1 != var2 -> ");
        resultadoFinal.append(var1 != var2);
        resultadoFinal.append("\n"); 
        
        //Testa se var1 é menor que var2
        resultadoFinal.append("var1 < var2 -> ");
        resultadoFinal.append(var1 < var2);
        resultadoFinal.append("\n"); 
        
        //Testa se var1 é maior que var2
        resultadoFinal.append("var1 > var2 -> ");
        resultadoFinal.append(var1 > var2);
        resultadoFinal.append("\n");
        
        //Testa se var1 é menor ou igual a var2
        resultadoFinal.append("var1 <= var2 -> ");
        resultadoFinal.append(var1 <= var2);
        resultadoFinal.append("\n"); 
        
        //Testa se var1 é maior ou igual a var2
        resultadoFinal.append("var1 >= var2 -> ");
        resultadoFinal.append(var1 >= var2);
        resultadoFinal.append("\n");
        
        return resultadoFinal.toString();
    }
    
}
