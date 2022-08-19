class Salário{
  public static void main(String[] args) {
    
    double horas, salhora, sal;
    
    horas = Entrada.leiaDouble("Quantas horas você trabalhou neste mês?");
    salhora = Entrada.leiaDouble("Qual o seu salário por hora?");
    
    if (horas >= 160) {
      sal = ((160 * salhora) + ((horas - 160) * salhora * 1.5));
        System.out.println("O seu salário este mês será de: R$" + sal);
    } else {
      System.out.println("Você não atingiu a carga horário estabelecida, favor entrar em contato com o RH");
    }
  }
}
