/* Exercício - Mostrar
Vamos ver como configurar a nossa primeira rota parametrizada com o Express.

Queremos que você crie uma rota que aponte para "/serie" e que ela, por sua vez, receba um número. Esse número vai representar a identificação da série que tentamos visualizar. Portanto, a rota deve retornar apenas a série que corresponde ao id que veio pelo parâmetro.



Um exemplo de como seria a rota: http://localhost/serie/3

Lembre-se que a variável da series já foi declarada, contem um array de objetos e você pode usá-la apenas escrevendo seu nome.

Na rota vamos obter um parâmetro que vai variar: o id da série. O seu trabalho será descobrir que série corresponde a esse número. Consegue pensar numa forma de fazer? DICA: Lembre-se que você pode usar tudo o que viu até agora: condicionais, métodos e muito mais. */


const express = require('express');
const app = express();

app.get ('/serie/:id', function(req,res){
  let {id} = req.params;
  id=Number(id)-1
  res.send(series[id]);
});