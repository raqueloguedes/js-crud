const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) 
    //promisse
    .then(resposta => {
        return resposta.json()
    })
}

const criaCliente = (nome, email) => { 
    return fetch(`http://localhost:3000/profile`, {
    //postagem    
    method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        // JSON.stringify transforma em string
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        return resposta.body
    })
}

const removeCliente = (id) => { 
    //id é o que identifica
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT', //colocar
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.json()
        })
}


export const clienteService = { 
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}