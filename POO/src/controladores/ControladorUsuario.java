package controladores;

import bancoDados.Conexao;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import modelos.Usuario;

/**
 * @author lucianoo_gp
 */
public class ControladorUsuario {
    
    public boolean login(String login, String senha) {
        try {
            
            Conexao.abreConexao();
            PreparedStatement stmt;
            ResultSet rs;
            
            String wSql = "SELECT login FROM usuarios WHERE login = ? AND senha = md5(?)";
            stmt = Conexao.con.prepareStatement(wSql);
            stmt.setString(1, login);
            stmt.setString(2, senha);
            
            rs = stmt.executeQuery();
            
            return rs.next();
            
        } catch (SQLException ex) {
            System.out.println("ERRO: " + ex.getMessage());
            return false;
        }
    }
    
    public boolean incluir(Usuario objeto) {
        try {
            
            Conexao.abreConexao();
            PreparedStatement stmt;
            
            String wSql = "INSERT INTO usuarios VALUES (DEFAULT, ?, ?, md5(?))";
            stmt = Conexao.con.prepareStatement(wSql);
            stmt.setString(1, objeto.getNome());
            stmt.setString(2, objeto.getLogin());
            stmt.setString(3, objeto.getSenha());
            
            stmt.executeUpdate();
            
            return true;
            
        } catch (SQLException ex) {
            System.out.println("ERRO: " + ex.getMessage());
            return false;
        }
    }
    
    public Usuario buscar(int id) {
        Usuario objeto = null;
        try {
            
            Conexao.abreConexao();
            PreparedStatement stmt;
            ResultSet rs;
            
            String wSql = "SELECT * FROM usuarios WHERE id = ?";
            stmt = Conexao.con.prepareStatement(wSql);
            stmt.setInt(1, id);
            
            rs = stmt.executeQuery();
            
            if (rs.next()) {
                objeto = new Usuario(rs.getInt("id"), rs.getString("login"), "", rs.getString("nome"));
                return objeto;                
            } else {
                return objeto;
            }
            
        } catch (SQLException ex) {
            System.out.println("ERRO: " + ex.getMessage());
            return objeto;
        }
    }
    
}
