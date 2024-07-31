document.addEventListener('DOMContentLoaded', () => {
    
    const apiUrl = 'http://localhost:3000';
    const ListaDeProdutos = document.getElementById('ListaDeProdutos');
    const AdicionarProduto = document.getElementById('AdicionarProduto');

    // Função para mostrar os produtos da lista
    function MostrarLista() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                ListaDeProdutos.innerHTML = '';

                //construir uma string com a lista dos produtos
                data.forEach(produto => {
                    const item = document.createElement('li');
                    item.textContent = `${produto.NOME} - ${produto.SABOR} - R$ ${produto.PRECO.toFixed(2)}`
                    ListaDeProdutos.appendChild(item);
                });

            })

            .catch(error => {
                console.error('Erro ao carregar produtos:', error);
            });
    }

    // Função para adicionar um produto
    AdicionarProduto.addEventListener('submit', event => {
        event.preventDefault();

        //guarda os valores do input nas variáveis
        const nome = document.getElementById('nome').value;
        const sabor = document.getElementById('sabor').value;
        const preco = parseFloat(document.getElementById('preco').value);

        //Envia os dados ao servidor com o método Post (no formato Json)
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, sabor, preco })
        })
        .then(response => response.text())
        .then(mensagem => {
            //console.log(mensagem);
            mensagemDiv.textContent = 'Produto adicionado à lista';
            mensagemDiv.style.color = '#5bc0de';
        })
        .catch(error => console.error('Erro ao adicionar produto:', error));
        
        MostrarLista();
    });

    // Carregar os produtos quando a página carregar
    MostrarLista();
});
