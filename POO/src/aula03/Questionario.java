package aula03;

import ferramentas.Mensagem;

/**
 *
 * @author lucianoo_gp
 */
public class Questionario {

    private String pergunta;
    private String respostaA;
    private String respostaB;
    private String respostaC;
    private char respostaCorreta;

    public String getPergunta() {
        return pergunta;
    }

    public void setPergunta(String pergunta) {
        this.pergunta = pergunta;
    }

    public String getRespostaA() {
        return respostaA;
    }

    public void setRespostaA(String respostaA) {
        this.respostaA = respostaA;
    }

    public String getRespostaB() {
        return respostaB;
    }

    public void setRespostaB(String respostaB) {
        this.respostaB = respostaB;
    }

    public String getRespostaC() {
        return respostaC;
    }

    public void setRespostaC(String respostaC) {
        this.respostaC = respostaC;
    }

    public char getRespostaCorreta() {
        return respostaCorreta;
    }

    public void setRespostaCorreta(char respostaCorreta) {
        this.respostaCorreta = respostaCorreta;
    }

    @Override
    public String toString() {
        return pergunta + "\n(1) " + respostaA + "\n(2) " + respostaB + "\n(3) " + respostaC;
    }
    
    public int validaResposta(char resposta) {
        if (resposta == respostaCorreta) {
            Mensagem.informacao("Resposta Correta");
            return 1;
        } else {
            Mensagem.informacao("Resposta Incorreta");
            return 0;
        }
    }

}
