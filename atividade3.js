var nomeP = prompt("Nome do Produto");
var valorP = prompt("Valor do Produto"); 
var quantP = prompt("Quantidade do Produto");


var total = parseInt(quantP) * parseInt(valorP); 

document.getElementById("Oi").innerHTML = "Nome do produto: " + nomeP + ". Quantidade: " + quantP + ". Valor total: " + total + "."; 