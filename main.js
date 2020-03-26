var api_url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

var ul_node = document.getElementById('lista')
fetch(api_url)
    .then(response => response.json())
    .then(data => data.forEach(item => {
        var imagem = document.createElement('img')
        imagem.setAttribute('class', 'img-lugar')
        imagem.setAttribute('src', item.photo)

        var descricao = document.createElement('p')
        descricao.appendChild(document.createTextNode(item.name))
        descricao.setAttribute('class', 'margin-p')

        var li_node = document.createElement('li')
        li_node.appendChild(imagem)
        li_node.appendChild(descricao)

        var div_tipo_preco = document.createElement('div')
        div_tipo_preco.setAttribute('class', 'tipo-preco')

        var tipo = document.createElement('p')
        tipo.appendChild(document.createTextNode(item.property_type))
        var preco = document.createElement('p')
        preco.appendChild(document.createTextNode(`R$ ${item.price}`))
        preco.setAttribute('class', 'preco')

        div_tipo_preco.appendChild(tipo)
        div_tipo_preco.appendChild(preco)

        li_node.appendChild(div_tipo_preco)

        ul_node.appendChild(li_node)
        
    }))
