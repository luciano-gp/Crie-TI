Algoritmo "petrobras"
Var
litros,kmi,kml,kmf,kmr:real
Inicio
escreval("Quantos litros de gasolina foi abastecido?")
leia(litros)
escreval("Quantos km/L o veículo roda?")
leia(kml)
escreval("Qual a quilometragem inicial?")
leia(kmi)
kmr<-(kml*litros)
kmf<-(kmi+kmr)
escreval ("O veículo irá rodar: ",kmr,"kms")
escreval("O veículo  terá a quilometragem final de: ",kmf,"kms")
Fimalgoritmo