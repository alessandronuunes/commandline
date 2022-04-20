#Tipos de rede
Bridge: é a rede default do docker, utilizado para a comunicação entre os containers
host: remove o isolamento de rede, o conteiner responde diretamente pela placa de rede do host ( recebe o mesmo ip do host)
overlay: permite a comunicação entre conteiners de hosts diferentes
macvlan:permite atribuir um endereço MAC ao conteiner tornando ele visivel como um dispositivo fisico na rede
none: sem rede

