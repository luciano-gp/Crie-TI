package avaliacao01;

/**
 *
 * @author lucianoo_gp
 */
public class TesteCidades {

    static Cidades[] vetCidades = new Cidades[5];
    static String[] vetVerifica = new String[5];

    public static void main(String[] args) {
        String cidade;

        for (int i = 0; i < vetCidades.length; i++) {
            cidade = Entrada.leiaString("Digite uma cidade");
            if (valida(cidade)) {
                vetVerifica[i] = cidade;
                preencheCidade(cidade, i);
            } else {
                Mensagem.erro("Cidade já cadastrada");
                i--;
            }
        }

        for (int i = 0; i < vetCidades.length; i++) {
            System.out.println(vetCidades[i]);
        }

        System.exit(0);
        
    }

    private static boolean valida(String cidade) {
        for (int i = 0; i < vetVerifica.length; i++) {
            if ((vetVerifica[i] != null) && (vetVerifica[i].equalsIgnoreCase(cidade))) {
                return false;
            }
        }
        return true;
    }

    private static void preencheCidade(String cidade, int id) {
        Cidades objCidade = new Cidades();
        objCidade.setNome(cidade);
        objCidade.setId(id+1);
        vetCidades[id] = objCidade;
    }

}
