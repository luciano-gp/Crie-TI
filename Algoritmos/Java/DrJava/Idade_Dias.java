class Idade_Dias{
  public static void main(String[] args) {
    
   int anos, meses, dias, idade;
   
   anos = Entrada.leiaInt("Quantos anos você tem?");
   meses = Entrada.leiaInt("Quantos meses?");
   dias = Entrada.leiaInt("E quantos dias?");
   
   idade = ((anos * 365) + (meses * 30) + dias);
    
    System.out.println("Você possui " + idade + " dias de idade");
  }
}