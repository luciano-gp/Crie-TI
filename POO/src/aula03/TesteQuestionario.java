package aula03;

import ferramentas.Entrada;
import ferramentas.Mensagem;

/**
 *
 * @author lucianoo_gp
 */
public class TesteQuestionario {
    
    public static void main(String[] args) {
        
        int acertos = 0;
        Questionario[] objQuestionario = new Questionario[3];
        
        Questionario objQuestionario1 = new Questionario();
        objQuestionario1.setPergunta("Qual é o sentido da vida?");
        objQuestionario1.setRespostaA("42");
        objQuestionario1.setRespostaB("Crescer e multiplicar");
        objQuestionario1.setRespostaC("Sou cético, não tem sentido");
        objQuestionario1.setRespostaCorreta('1');      
              
        Questionario objQuestionario2 = new Questionario();
        objQuestionario2.setPergunta("Como diria o filósifo Piton...");
        objQuestionario2.setRespostaA("...só sei que nada sei");
        objQuestionario2.setRespostaB("...tudo na vida depende de quanto você quer comer algueḿ");
        objQuestionario2.setRespostaC("...malandro é malandro e mané é mané");
        objQuestionario2.setRespostaCorreta('2');  
        
        Questionario objQuestionario3 = new Questionario();
        objQuestionario3.setPergunta("Qual a raíz quadrada de 144?");
        objQuestionario3.setRespostaA("12");
        objQuestionario3.setRespostaB("14");
        objQuestionario3.setRespostaC("10,4");
        objQuestionario3.setRespostaCorreta('1');
        
        objQuestionario[0] = objQuestionario1;
        objQuestionario[1] = objQuestionario2;
        objQuestionario[2] = objQuestionario3;
        
        for (Questionario objQuestionario4 : objQuestionario) {
            acertos += objQuestionario4.validaResposta(Entrada.leiaChar(objQuestionario4.toString()));
        }
        
        Mensagem.informacao("Total de acertos: " + acertos);

        System.exit(0);
    }
    
}
