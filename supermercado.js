var items = [];

document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    if (nomeProduto.value.trim() == '' || precoProduto.value.trim() == '') {
        alert('Insira os produtos');
    } else {
        items.push({
            nome: nomeProduto.value,
            valor: parseFloat(precoProduto.value)
        });
        updateListAndTotal();
    }

    nomeProduto.value = "";
    precoProduto.value = "";
});

document.querySelector('.lista_produtos').addEventListener('click', (event) => {
    if (event.target && event.target.name == 'excluir') {
        let index = event.target.getAttribute('data-index');
        items.splice(index, 1);
        updateListAndTotal();
    }
});

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = [];
    updateListAndTotal();
});

function updateListAndTotal() {
    let listaProdutos = document.querySelector('.lista_produtos');
    listaProdutos.innerHTML = "";
    let soma = 0;

    items.forEach(function (val, index) {
        soma += val.valor;
        listaProdutos.innerHTML += `
        <div class="lista_produtos_single">
            <h3>${val.nome}</h3>
            <h3 class="price_produto"><span>R$ ${val.valor.toFixed(2)}</span></h3>
            <button name="excluir" data-index="${index}">excluir</button>
        </div>`;
    });

    let elementosoma = document.querySelector('.soma-produto h1');
    elementosoma.innerHTML = 'Valor Total R$' + soma.toFixed(2);
}
