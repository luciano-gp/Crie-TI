package modelos;

import ferramentas.Mensagem;
import java.util.ArrayList;

/**
 *
 * @author lucianoo_gp
 */
public class ContaBanco {

    private String agencia;
    private String conta;
    private String titular;
    private double saldo;
    private double chequeEspecial;
    private ArrayList<String> chavesPix = new ArrayList();
    private String chavePix;
    private String senha;

    public ContaBanco(String agencia, String conta, String titular, double saldo, double chequeEspecial, ArrayList<String> chavesPix, String senha) {
        this.agencia = agencia;
        this.conta = conta;
        this.titular = titular;
        this.saldo = saldo;
        this.chequeEspecial = chequeEspecial;
        this.chavesPix = chavesPix;
        this.senha = senha;
    }
    
    public ContaBanco() {
    }

    public String getAgencia() {
        return agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public String getConta() {
        return conta;
    }

    public void setConta(String conta) {
        this.conta = conta;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public ArrayList<String> getChavesPix() {
        return chavesPix;
    }

    public void setChavesPix(ArrayList<String> chavesPix) {
        this.chavesPix = chavesPix;
    }

    public String getChavePix() {
        return chavePix;
    }

    public void setChavePix(String chavePix) {
        this.chavePix = chavePix;
    }

    public boolean saque(double saque, double taxa, boolean imprime) {
        if (saque > (saldo + chequeEspecial)) {
            Mensagem.erro("Saldo Insuficiente");
            return false;
        } else if (saque < 0) {
            Mensagem.erro("Valor Inválido (negativo)");
            return false;
        } else {
            saldo -= (saque + taxa);
            if (imprime) {
                Mensagem.informacao("Saque efetuado no valor de R$" + saque);
            }
            return true;
        }
    }

    public void deposito(double deposito, boolean imprime) {
        if (deposito <= 0) {
            Mensagem.erro("Valor Inválido");
        } else {
            saldo += deposito;
            if (imprime) {
                Mensagem.informacao("Depósito efetuado no valor de R$" + deposito);
            }
        }
    }

    public void transferencia(double transferencia, ContaBanco objConta, double taxa) {
        if (saque(transferencia, taxa, false)) {
            objConta.deposito(transferencia, false);
        }
    }
    
    public void pix(double valorPix, ContaBanco objConta) {
        transferencia(valorPix, objConta, 0);
    }

    public double getChequeEspecial() {
        return chequeEspecial;
    }

    public void setChequeEspecial(double chequeEspecial) {
        this.chequeEspecial = chequeEspecial;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String toStringTudo() {
        return ("Agência: " + agencia + "\nConta: " + conta + "\nTitular: " + titular + "\nSaldo: R$" + saldo +
         "\nLimite Ch. Especial: R$" + chequeEspecial + "\nChave Pix: " + chavePix);
    }
    
    @Override
    public String toString() {
        return ("Conta: " + conta);
    }
}
