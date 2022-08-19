class Bananas{
  public static void main(String[] args) {
    
    int bn;
    double total;
    
    bn = Entrada.leiaInt("Quantas bananas serão compradas?");
    
    if (bn >= 12) {
      total = (bn * 2);
    } else {
      total = (bn * 2.5);
    }
    
    System.out.println("Valor final: R$" + total);
  }
}
