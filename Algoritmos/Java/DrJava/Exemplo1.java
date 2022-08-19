class Exemplo1{ //inicio
  
  public static void main(String[] args) { //inicio bloco de codigo  
    
    //idade:inteiro  
    // int = Integer (inteiro)
    // double = real
    // char = 1 caracter
    // String = caracter
    
    int idade;
    double salario; 
    char sexo;
    String nome;
    
    idade = 23;
    salario = 1200.50;
    sexo = 'F'; // caracter aspas simples
    nome = "Filomena"; // string aspas duplas
    
    System.out.println("Eu me chamo " + nome
                         + ", tenho " + idade
                         + " anos, sou do sexo " + sexo
                         + " e recebo R$" + salario);
    
    //lendo os dados a partir do teclado
    
    idade = Entrada.leiaInt("Digite a sua idade");
    salario = Entrada.leiaDouble("Digite o seu salário");
    sexo = Entrada.leiaChar("Digite o seu sexo"); // caracter aspas simples
    while (sexo != 'm' && sexo != 'M' && sexo != 'f' && sexo != 'F') {
    sexo = Entrada.leiaChar("Seu sexo deve ser definido com 'm' ou 'f'");
    }
    nome = Entrada.leiaString("Digite o seu nome"); // string aspas duplas
    
    System.out.println("Eu me chamo " + nome
                         + ", tenho " + idade
                         + " anos, sou do sexo " + sexo
                         + " e recebo R$" + salario);
    
    if ( salario > 2000) { //se
      System.out.println("Não ta ganhando mal, einh!");
    } else if (salario >= 1500 && salario <2000) { //senao se
      System.out.println("Vish, trabalhe mais!");
    } else { //senao
      System.out.println("Putz, ai é foda!");
    }
    
    int cont = 1; //contador
    
    while ( cont <= 5 ) { //enquanto
      System.out.println("Contador: " + cont);
      //cont = cont + 1;
      //cont += 1;
      cont++;
    } //fim enquanto
    
  } //final bloco de codigo
  
} //fim