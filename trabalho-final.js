let abrigos = [];

function adicionarAbrigo() {
    let nome = prompt("Digite o nome do abrigo:");
    let endereco = prompt("Digite o endereço do abrigo:");
    let telefone = prompt("Digite o telefone do abrigo:");
    let capacidade = prompt("Digite a capacidade do abrigo:");
    let cidade = prompt("Digite a cidade do abrigo:");
    
    let abrigo = { nome, endereco, telefone, capacidade, cidade };
    abrigos.push(abrigo);
    alert("Abrigo adicionado com sucesso!");
}

function listarAbrigos() {
    if (abrigos.length === 0) {
        alert("Nenhum abrigo cadastrado.");
    } else {
        let lista = "Lista de Abrigos:\n";
        for (let i = 0; i < abrigos.length; i++) {
            let abrigo = abrigos[i];
            lista += `${i + 1}. ${abrigo.nome}, ${abrigo.endereco}, Tel: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}, Cidade: ${abrigo.cidade}\n`;
        }
        alert(lista);
    }
}

function buscarAbrigoPorCidade() {
    let cidadeBusca = prompt("Digite a cidade para buscar abrigos:");
    let lista = `Abrigos em ${cidadeBusca}:\n`;
    let encontrado = false;

    for (let i = 0; i < abrigos.length; i++) {
        let abrigo = abrigos[i];
        if (abrigo.cidade.toLowerCase() === cidadeBusca.toLowerCase()) {
            lista += `${i + 1}. ${abrigo.nome}, ${abrigo.endereco}, Tel: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}\n`;
            encontrado = true;
        }
    }

    if (encontrado) {
        alert(lista);
    } else {
        alert("Nenhum abrigo encontrado para esta cidade.");
    }
}

function menu() {
    let opcao;
    do {
        opcao = prompt("Escolha uma opção:\n1. Adicionar Abrigo\n2. Listar Abrigos\n3. Buscar Abrigo por Cidade\n4. Sair");
        
        switch (opcao) {
            case '1':
                adicionarAbrigo();
                break;
            case '2':
                listarAbrigos();
                break;
            case '3':
                buscarAbrigoPorCidade();
                break;
            case '4':
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida.");
        }
    } while (opcao !== '4');
}

menu();
