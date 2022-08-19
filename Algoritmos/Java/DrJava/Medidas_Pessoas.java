class Medidas_Pessoas{
  public static void main(String[] args) {
    
    int id, alt, cont, contid, contalt;
    double peso, medialt, pesoinf, contpeso;
    
    contid = 0;
    medialt = 0;
    contalt = 0;
    contpeso = 0;
    
    for ( cont = 1; cont <= 5; cont++) {
      id = Entrada.leiaInt("Qual sua idade?");
      alt = Entrada.leiaInt("Qual sua altura, em cm?");
      peso = Entrada.leiaDouble("Qual seu peso?");
      
      if (id > 50) {
        contid++;
      }
      if ( (id >= 10) && (id <= 20) ) {
        medialt = (medialt + alt);
        contalt++;        
      }
      if (peso < 40) {
        contpeso++;
      }
    }
    
    medialt = (medialt / contalt);
    pesoinf = ((contpeso / 5) * 100);
    
    System.out.println("Pessoas com mais de 50 anos: " + contid);
    System.out.println("Média das alturas das pessoas entre 10 e 20 anos: " + medialt);
    System.out.println("Porcentagem de pessoas com menos de 40kg: " + pesoinf + "%");

  }
}