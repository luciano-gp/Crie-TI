package aula07;

import aula03.Questionario;
import java.text.DecimalFormat;
import java.util.ArrayList;

public class TelaQuestionario extends javax.swing.JFrame {

    ArrayList<Questionario> questionario = new ArrayList();
    int index = 0;
    int acertos = 0;
    int erros = 0;

    public TelaQuestionario() {
        initComponents();
        
        btnSair.setVisible(false);

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

        questionario.add(objQuestionario1);
        questionario.add(objQuestionario2);
        questionario.add(objQuestionario3);

        mostraPergunta();
        mostraOpcoes();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        btnGrupo = new javax.swing.ButtonGroup();
        jPanel1 = new javax.swing.JPanel();
        jScrollPane1 = new javax.swing.JScrollPane();
        txtPergunta = new javax.swing.JTextArea();
        btnAvancar = new javax.swing.JButton();
        rdoOpcao1 = new javax.swing.JRadioButton();
        rdoOpcao2 = new javax.swing.JRadioButton();
        rdoOpcao3 = new javax.swing.JRadioButton();
        txtAviso = new javax.swing.JLabel();
        btnSair = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "Questionario", javax.swing.border.TitledBorder.DEFAULT_JUSTIFICATION, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("Liberation Sans", 1, 18))); // NOI18N
        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jScrollPane1.setBorder(javax.swing.BorderFactory.createTitledBorder("Questão"));

        txtPergunta.setColumns(20);
        txtPergunta.setRows(5);
        jScrollPane1.setViewportView(txtPergunta);

        jPanel1.add(jScrollPane1, new org.netbeans.lib.awtextra.AbsoluteConstraints(11, 30, 416, -1));

        btnAvancar.setText("Avançar");
        btnAvancar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAvancarActionPerformed(evt);
            }
        });
        jPanel1.add(btnAvancar, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 300, -1, -1));

        btnGrupo.add(rdoOpcao1);
        jPanel1.add(rdoOpcao1, new org.netbeans.lib.awtextra.AbsoluteConstraints(11, 167, 416, -1));

        btnGrupo.add(rdoOpcao2);
        jPanel1.add(rdoOpcao2, new org.netbeans.lib.awtextra.AbsoluteConstraints(11, 204, 416, -1));

        btnGrupo.add(rdoOpcao3);
        jPanel1.add(rdoOpcao3, new org.netbeans.lib.awtextra.AbsoluteConstraints(11, 241, 416, -1));

        txtAviso.setForeground(new java.awt.Color(255, 0, 0));
        jPanel1.add(txtAviso, new org.netbeans.lib.awtextra.AbsoluteConstraints(32, 307, 217, -1));

        btnSair.setText("Sair");
        btnSair.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSairActionPerformed(evt);
            }
        });
        jPanel1.add(btnSair, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 300, 81, -1));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, 338, Short.MAX_VALUE)
                .addContainerGap())
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnAvancarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAvancarActionPerformed
        if (btnGrupo.getSelection() == null) {
            txtAviso.setText("Marque uma alternativa");
        } else if (index < questionario.size()) {
            valida(questionario.get(index));
            index++;
            mostraPergunta();
            mostraOpcoes();
            desmarcaBotoes();
            verificaFim();
        }
    }//GEN-LAST:event_btnAvancarActionPerformed

    private void btnSairActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSairActionPerformed
        System.exit(0);
    }//GEN-LAST:event_btnSairActionPerformed

    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(TelaQuestionario.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(TelaQuestionario.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(TelaQuestionario.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(TelaQuestionario.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new TelaQuestionario().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnAvancar;
    private javax.swing.ButtonGroup btnGrupo;
    private javax.swing.JButton btnSair;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JRadioButton rdoOpcao1;
    private javax.swing.JRadioButton rdoOpcao2;
    private javax.swing.JRadioButton rdoOpcao3;
    private javax.swing.JLabel txtAviso;
    private javax.swing.JTextArea txtPergunta;
    // End of variables declaration//GEN-END:variables

    private void mostraPergunta() {
        if (index < questionario.size()) {
            rdoOpcao1.setText(questionario.get(index).getRespostaA());
            rdoOpcao2.setText(questionario.get(index).getRespostaB());
            rdoOpcao3.setText(questionario.get(index).getRespostaC());
        }
    }

    private void mostraOpcoes() {
        if (index < questionario.size()) {
            txtPergunta.setText(questionario.get(index).getPergunta());
        }
    }

    private void valida(Questionario objRecebido) {

        char resposta = '0';

        if (rdoOpcao1.isSelected()) {
            resposta = '1';
        } else if (rdoOpcao2.isSelected()) {
            resposta = '2';
        } else {
            resposta = '3';
        }

        if (resposta == objRecebido.getRespostaCorreta()) {
            acertos++;
        } else {
            erros++;
        }
    }

    private void desmarcaBotoes() {
        btnGrupo.clearSelection();
        txtAviso.setText("");
    }
    
    private void verificaFim() {
        if (index == questionario.size()) {
            DecimalFormat decimal = new DecimalFormat("0.00");
            double porcAcertos = (((double)acertos / questionario.size()) * 100);
            txtPergunta.setText("Questionário concluído com: " + decimal.format(porcAcertos) + "% de acertos");
            rdoOpcao1.setText("");
            rdoOpcao2.setText("");
            rdoOpcao3.setText("");
            rdoOpcao1.setVisible(false);
            rdoOpcao2.setVisible(false);
            rdoOpcao3.setVisible(false);
            btnAvancar.setVisible(false);
            btnSair.setVisible(true);
        }
    }
}
