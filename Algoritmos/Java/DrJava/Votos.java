class Votos{
  public static void main(String[] args) {
    
    double b, n, v, t;
    
    v = Entrada.leiaDouble("Quantos votos válidos tivemos?");
    n = Entrada.leiaDouble("Quantos votos nulos tivemos?");
    b = Entrada.leiaDouble("Quantos votos em branco tivemos?");
    
    t = (v + b + n);
    v = ((v / t) * 100);
    n = ((n / t) * 100);
    b = ((b / t) * 100);
    
    System.out.println("Tivemos um total de " + t + " votos");
    System.out.println("Sendo: " + v + "% de votos válidos;");
    System.out.println(n + "% de votos nulos;");
    System.out.println(b + "% de votos em branco.");
  }
}