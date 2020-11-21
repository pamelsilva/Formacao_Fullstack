/* Exercício: Exportando Módulos
Temos dados do cachorro Scooby armazenados em diversas variáveis. Seu trabalho será criar a variável cachorro e armazenar nela todos os dados e depois, exporta-los.
Lembre-se que podemos exportar qualquer tipo de dado pelo JSON! e de declarar a variável cachorro */



//let nome = 'Scooby';
//let idade = 7;
//let gostaDeComer = true;

const cachorro = {nome: 'Scooby', idade:7, gostaDeComer: true}
module.exports=cachorro;