package atividades;

import java.util.ArrayList;

/**
 * @author lucianoo_gp
 */
public class luciano {

    public static void main(String[] args) {

        ArrayList<String> clientes = new ArrayList<>();
        ArrayList<String> produtos = new ArrayList<>();
        ArrayList<String> categorias = new ArrayList<>();
        int op;
        int tamCadast = 2;
        
        do {
            op = Entrada.leiaInt("""
                                 [1] Cadastrar clientes
                                 [2] Cadastrar produtos
                                 [3] Cadastrar categorias
                                 [4] Listar clientes
                                 [5] Listar produtos
                                 [6] Listar categorias
                                 [7] Resumo
                                 [8] Sair
                                 """);
            
            switch (op) {
                case 1 -> {
                    if (clientes.size() >= tamCadast){
                        Mensagem.erro("Número máximo de clientes cadastrados!");
                    } else {
                        clientes.add(Entrada.leiaString("Novo cliente: "));
                        Mensagem.informacao("Cliente cadastrado com sucesso");
                    }
                }
                case 2 -> {
                    if (produtos.size() >= tamCadast){
                        Mensagem.erro("Número máximo de produtos cadastrados!");
                    } else {
                        produtos.add(Entrada.leiaString("Novo produto: "));
                        Mensagem.informacao("Produto cadastrado com sucesso");
                    }
                }
                case 3 -> {
                    if (categorias.size() >= tamCadast){
                        Mensagem.erro("Número máximo de categorias cadastradas!");
                    } else {
                        categorias.add(Entrada.leiaString("Nova categoria: "));
                        Mensagem.informacao("Categoria cadastrada com sucesso");
                    }
                }
                case 4 -> Mensagem.informacao(concatenaClientes(clientes));
                case 5 -> Mensagem.informacao(concatenaProdutos(produtos));
                case 6 -> Mensagem.informacao(concatenaCategorias(categorias));
                case 7 -> Mensagem.informacao("Clientes cadastrados: " + clientes.size() + "\n"
                    + "Produtos cadastrados: " + produtos.size() + "\n"
                    + "Categorias cadastradas: " + categorias.size());
                case 8 -> Mensagem.aviso("Saindo do sistema");
                default -> Mensagem.erro("Operação Inválida");
            }
            
        } while (op != 8);
        
        System.exit(0);

    }
 
    public static StringBuilder concatenaClientes(ArrayList<String> nomeClientes) {
        StringBuilder listaClientes = new StringBuilder();
        listaClientes.append("Lista de Clientes: \n\n");
        for (int i = 0; i < nomeClientes.size(); i++) {
            listaClientes.append(i + 1);
            listaClientes.append(" - ");
            listaClientes.append(nomeClientes.get(i));
            listaClientes.append("\n");
        }
        return listaClientes;
    }
    
    public static StringBuilder concatenaProdutos(ArrayList<String> nomeProdutos) {
        StringBuilder listaProdutos = new StringBuilder();
        listaProdutos.append("Lista de Produtos: \n\n");
        for (int i = 0; i < nomeProdutos.size(); i++) {
            listaProdutos.append(i + 1);
            listaProdutos.append(" - ");
            listaProdutos.append(nomeProdutos.get(i));
            listaProdutos.append("\n");
        }
        return listaProdutos;
    }
    
    public static StringBuilder concatenaCategorias(ArrayList<String> nomeCategorias) {
        StringBuilder listaCategorias = new StringBuilder();
        listaCategorias.append("Lista de Categorias: \n\n");
        for (int i = 0; i < nomeCategorias.size(); i++) {
            listaCategorias.append(i + 1);
            listaCategorias.append(" - ");
            listaCategorias.append(nomeCategorias.get(i));
            listaCategorias.append("\n");
        }
        return listaCategorias;
    }
    
}