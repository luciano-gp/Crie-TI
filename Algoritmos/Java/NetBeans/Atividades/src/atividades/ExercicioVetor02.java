/*
Escrever um programa que leia 10 nomes, os armazene em um vetor e depois os
imprima na ordem inversa de leitura.
*/
package atividades;

/**
 * @author lucianoo_gp
 */
public class ExercicioVetor02 {
    
    public static void main(String[] args) {
        
        String[] vetor = new String[10];
        
        for (int i = 0; i < 10; i++) {   
            vetor[i] = Entrada.leiaString("Digite o " + (i+1) + "º nome: ");        
        }
        
        for (int i = 9; i > -1; i--){
            System.out.println(vetor[i]);            
        }
        
        System.exit(0);
        
    }
    
}
