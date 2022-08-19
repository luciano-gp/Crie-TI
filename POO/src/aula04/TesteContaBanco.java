package aula04;

import ferramentas.Entrada;
import java.util.ArrayList;
import java.util.Arrays;
import modelos.ContaBanco;

/**
 *
 * @author lucianoo_gp
 */
public class TesteContaBanco {
    
    public static void main(String[] args) {
        
        ContaBanco objConta1 = new ContaBanco();
        objConta1.setAgencia("007");
        objConta1.setConta("53105");
        objConta1.setTitular("Juca Bala");
        objConta1.setSaldo(2000);
        objConta1.setChequeEspecial(500);
        objConta1.setChavesPix(new ArrayList<>(Arrays.asList("aa404")));
        //objConta1.setChavePix({"jucabala@gmail.com", "54996969696", "11111111111"});
        
        ContaBanco objConta2 = new ContaBanco();
        objConta2.setAgencia("134");
        objConta2.setConta("80805");
        objConta2.setTitular("Marta");
        objConta2.setSaldo(3700);
        objConta2.setChequeEspecial(1000);
        objConta2.setChavesPix(new ArrayList<>(Arrays.asList("cd215")));
        //objConta1.setChavePix({"marta@gmail.com", "51988888888", "88888888888"});
        
        ArrayList<ContaBanco> contas = new ArrayList();
        contas.add(objConta1);
        contas.add(objConta2);
        
        String pix = Entrada.leiaString("Chave pix:");
        for (int i = 0; i < contas.size(); i++) {
            if (pix.equals(contas.get(i).getChavesPix().get(0))) {
                objConta1.pix(Entrada.leiaDouble("Valor do pix:"), contas.get(i));
            }
        }
        
        //objConta1.transferencia(Entrada.leiaDouble("Valor da transferência: "), objConta2, 0);
        
        System.out.println(objConta1);
        //objConta1.deposito(Entrada.leiaDouble("Valor do depósito: "), true);
        System.out.println(objConta2);
        //objConta1.saque(Entrada.leiaDouble("Valor do saque: "), 0, true);
        //System.out.println(objConta1);
        
        System.exit(0);
    }
    
}
