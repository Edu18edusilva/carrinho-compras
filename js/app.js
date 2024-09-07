let totalGeral = 0;
limpar();

function adicionar() {
    let quantidade = document.getElementById ('quantidade').value;
 
    let produto = document.getElementById ('produto').value;

    //preciso pegar o valor de cada produto e somente o nome
    let valorProduto = produto.match(/\d+/g).map(Number);
    let nomeProduto = produto.split ('- ') [0];
        
    //multiplicar esse valor com o valor da quantidade 
    let valorProdutoXQuantidade = valorProduto * quantidade;
    
    //adicionar no carrinho
    let carrinho = document.getElementById ('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProdutoXQuantidade}</span>
        </section>`;
    
    //atualizar o valor total
    totalGeral = totalGeral + valorProdutoXQuantidade;
    let valorTotal = document.getElementById ('valor-total');
    valorTotal.textContent = `R$${totalGeral}`;
    document.getElementById ('quantidade').value = ' ';

};

function limpar() {
    totalGeral = 0;
    document.getElementById ('lista-produtos').innerHTML = ' ';
    document.getElementById ('valor-total').textContent = 'R$0';
}