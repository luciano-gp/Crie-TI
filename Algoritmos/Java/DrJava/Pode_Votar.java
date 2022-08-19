class Pode_Votar{
  public static void main(String[] args) {
    
    int anon, anoa, id;
    
    anoa = Entrada.leiaInt("Em que ano estamos?");
    anon = Entrada.leiaInt("Em que ano você nasceu?");
    
    id = (anoa - anon);
    
    if ( id >= 16) {
      System.out.println("Você já pode votar nas eleições deste ano");
    } else {
      System.out.println("Você ainda não pode votar nas eleições deste ano");
    }
  }
}