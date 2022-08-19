package aula05;

import ferramentas.Entrada;
import ferramentas.Mensagem;
import java.util.ArrayList;
import java.util.Arrays;
import modelos.ContaBanco;

/**
 *
 * @author lucianoo_gp
 */
public class TestePix {

    private static final ArrayList<ContaBanco> contas = new ArrayList();

    public static void main(String[] args) {
        try {
            ContaBanco objConta1 = new ContaBanco("012", "00178", "Juca", 500, 100, new ArrayList<>(Arrays.asList("178", "juca#", "j78")), "");
            contas.add(objConta1);
            ContaBanco objConta2 = new ContaBanco("012", "00180", "Maria", 500, 100, new ArrayList<>(Arrays.asList("180", "maria#", "m80")), "");
            contas.add(objConta2);
            ContaBanco objConta3 = new ContaBanco("012", "00183", "Tiago", 500, 100, new ArrayList<>(Arrays.asList("183", "tiago#", "t83")), "");
            contas.add(objConta3);
            ContaBanco objConta4 = new ContaBanco("012", "00187", "Ana", 500, 100, new ArrayList<>(Arrays.asList("187", "ana#", "a87")), "");
            contas.add(objConta4);
            ContaBanco objConta5 = new ContaBanco("012", "00191", "Fabricio", 500, 100, new ArrayList<>(Arrays.asList("191", "fabricio#", "f91")), "");
            contas.add(objConta5);

            ContaBanco objContaOrigem = identificaConta(Entrada.leiaString("Qual sua conta?"));
            while (objContaOrigem == null) {
                Mensagem.erro("Conta não localizada, tente novamente!");
                objContaOrigem = identificaConta(Entrada.leiaString("Qual sua conta?"));
            }
            ContaBanco objContaDestino = identificaPix(Entrada.leiaString("Qual PIX de destino?"));
            while (objContaDestino == null) {
                Mensagem.erro("PIX não localizado, tente novamente!");
                objContaOrigem = identificaConta(Entrada.leiaString("Qual PIX de destino?"));
            }
            double valorPix = Entrada.leiaDouble("Digite o valor do PIX:");
            objContaOrigem.pix(valorPix, objContaDestino);

            imprimeContas();
            
        } catch (Exception ex) {
            System.out.println("Erro: " + ex.getMessage());
        }
        System.exit(0);

    }

    private static ContaBanco identificaConta(String conta) {
        for (int i = 0; i < contas.size(); i++) {
            if (conta.equals(contas.get(i).getConta())) {
                return contas.get(i);
            }
        }
        return null;
    }

    private static ContaBanco identificaPix(String pix) {
        for (int i = 0; i < contas.size(); i++) {
            for (int j = 0; j < contas.get(i).getChavesPix().size(); j++) {
                if (pix.equals(contas.get(i).getChavesPix().get(j))) {
                    return contas.get(i);
                }
            }
        }
        return null;
    }

    private static void imprimeContas() {
        for (int i = 0; i < contas.size(); i++) {
            System.out.println(contas.get(i));
        }
    }
}
