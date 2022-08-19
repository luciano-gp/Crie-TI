package atividades;

/**
 * @author lucianoo_gp
 */
public class luciano4 {

    public static void main(String[] args) {

        String ipClasse;
        int[] ip = new int[255];
        int[] ipUsado = new int[255];
        int devIp = 0;
        int op = 0;
        int i = 0;
        int lerIp = 0;

        ipClasse = Entrada.leiaString("""
                                Digite a classe de IP's.
                                Exemplo: 170.0.0.""");

        while (op != 3) {

            op = Entrada.leiaInt("""
                                     O que deseja fazer?
                                     [1] Pegar um IP
                                     [2] Devolver um IP
                                     [3] Sair do sistema""");

            switch (op) {
                case 1 -> {
                    lerIp =  Entrada.leiaInt("Qual ip você deseja?");
                    while ((lerIp > 254) || (lerIp <= 0)) {
                        Mensagem.erro("Informe um IP entre 1 e 254");
                        lerIp =  Entrada.leiaInt("Qual ip você deseja?");
                    }
                    ipUsado[i] = lerIp;
                    while (ip[ipUsado[i]] == 1) {
                        Mensagem.erro("IP não disponível");
                        ipUsado[i] = Entrada.leiaInt("Qual ip você deseja?");
                    }
                    ip[ipUsado[i]] = 1;
                    Mensagem.informacao("Endereço IP entregue, você é o IP: " + ipClasse + ipUsado[i]);
                    i++;
                    break;
                }
                case 2 -> {
                    devIp = Entrada.leiaInt("Qual IP você deseja devolver?");
                    while (ip[devIp] == 0) {
                        Mensagem.erro("Este IP não está sendo usado");
                        devIp = Entrada.leiaInt("Qual IP você deseja devolver?");
                    }
                    ip[devIp] = 0;
                    Mensagem.informacao("IP " + ipClasse + devIp + " devolvido");
                    i--;
                    break;
                }
                case 3 -> {
                    Mensagem.aviso("Fechando sistema...");
                }
                default -> Mensagem.erro("Opção inválida");                
            }
            
        }
        
        System.out.println("Quantidade de IP's ocupados: " + i);
        System.out.println("IP's ocupados: ");
        for (int j = 0; j < ip.length; j++) {
            if (ip[j] == 1) {
                System.out.print(ipClasse + j + "\n");
            }
        }
        System.out.println("");
        System.out.println("Quantidade de IP's disponíveis: " + (ip.length - i - 1));
        System.out.println("IP's disponíveis: ");
        for (int j = 1; j < ip.length; j++) {
            if (ip[j] == 0) {
                System.out.print(ipClasse + j + "\n");
            }
        }
        
        System.exit(0);

    }
        
}
