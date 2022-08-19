package avaliacao01;
import javax.swing.JOptionPane;

/**
 *
 * @author mateusrovedaa
 */
public class Mensagem {

    /**
     * Método privado para geração de mensagens do sistema
     *
     * @param titulo mensagem a ser exibida no topo da tela
     * @param mensagem mensagem a ser exibida no conteudo da caixa de dialogo
     * @param tipo padrãoo de mensagens <b>JOptionPane<b>
     */
    private static void mensagem(String titulo, String mensagem, int tipo) {
        JOptionPane.showMessageDialog(null, mensagem, titulo, tipo);
    }

    private static int mensagemConfirmacao(String titulo, String mensagem, int tipo, Object botoes[]) {
        int escolha = JOptionPane.showOptionDialog(null, mensagem, titulo,
                JOptionPane.DEFAULT_OPTION, tipo, 
                null, botoes, botoes[0]);
        return escolha;
    }

    /**
     * Metodo para exibição de mensagens de aviso/alerta
     *
     * @param mensagem mensagem a ser exibida na tela
     */
    public static void aviso(String mensagem) {
        mensagem("Aviso", mensagem, JOptionPane.WARNING_MESSAGE);
    }

    /**
     * Metodo para exibição de mensagens de informação
     *
     * @param mensagem mensagem a ser exibida na tela
     */
    public static void informacao(String mensagem) {
        mensagem("Informação", mensagem, JOptionPane.INFORMATION_MESSAGE);
    }
    public static void informacao(StringBuilder mensagem) {
        String mensagemTransformada = mensagem.toString();
        mensagem("Informação", mensagemTransformada, JOptionPane.INFORMATION_MESSAGE);
    }

    /**
     * Metodo para exibição de mensagens de erro
     *
     * @param mensagem mensagem a ser exibida na tela
     */
    public static void erro(String mensagem) {
        mensagem("Erro", mensagem, JOptionPane.ERROR_MESSAGE);
    }

    /**
     * Metodo para exibição de mensagens de confirmação
     *
     * @param mensagem mensagem a ser exibida na tela
     * @return int com a escolha: 0 - sim; 1 - não; 2 - cancelar;
     */
    public static int confirmacao(String mensagem) {
        Object botoes[] = {"Sim", "Não", "Cancelar"};
        return mensagemConfirmacao("Confirmação", mensagem, JOptionPane.QUESTION_MESSAGE, botoes);
    }
}
