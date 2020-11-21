/* Vamos instanciar um servidor, pois a primeira coisa que precisamos fazer é um require para incluir um outro módulo. Pedimos, como primeiro passo, para criar a variável "http" e armazenar o módulo http nele.
https://www.w3schools.com/nodejs/nodejs_http.asp

Queremos que você também execute o método necessário para criar o nosso servidor.
Este método recebe um callback. Faça que o mesmo imprima no console a frase "Instanciando um servidor"
https://www.w3schools.com/nodejs/met_http_createserver.asp

Agora, execute o método necessário para por o servidor escutando a porta 3000 no domínio "localhost"
Você deve usar o método listen do objeto http
 */



const http = require('http');

http.createServer((req, res) =>  {
	console.log("Instanciando um servidor");
}).listen(3000,'localhost');
