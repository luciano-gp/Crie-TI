Algoritmo "petrobras"
Var
litros,kmi,kml,kmf,kmr:real
Inicio
escreval("Quantos litros de gasolina foi abastecido?")
leia(litros)
escreval("Quantos km/L o ve?culo roda?")
leia(kml)
escreval("Qual a quilometragem inicial?")
leia(kmi)
kmr<-(kml*litros)
kmf<-(kmi+kmr)
escreval ("O ve?culo ir? rodar: ",kmr,"kms")
escreval("O ve?culo  ter? a quilometragem final de: ",kmf,"kms")
Fimalgoritmo