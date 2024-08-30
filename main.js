const form = document.getElementById('form-agenda');
let linhas = '';
const contatos = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizafinal();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('name');
    const inputNumeroContato = document.getElementById('numero'); 

    contatos.push(inputNomeContato.value);
    telefones.push(parseFloat(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizafinal() {
    const final = somaContatos();

    document.getElementById('valor-contatos').innerHTML = final;
}

function somaContatos(){
    let somaNumeros = 0;
    
    for (let i = 0; i < telefones.length; i++){
        somaNumeros += telefones[i];
    }
    return telefones.length;
    
}




