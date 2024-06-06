const btnsubmit = document.getElementById("form-adicionar");
const contato = [];
const telefone = [];
let linhas = '';

btnsubmit.addEventListener('submit', function(e){
    e.preventDefault(); 
    /*o preventDefault previne certo comportamento padrão de um objeto
    Nesse caso desejamos evitar que ao clicar no submit outra janela se abra*/

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    let inputNomeContato = document.getElementById("nome-contato");
    let inputNumeroTelefone = document.getElementById("numero-telefone");

    if(contato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeAtividade.value} já existe!`);
    } else {
        contato.push(inputNomeContato.value);
    }

    if(telefone.includes(inputNumeroTelefone)){
        alert(`O telefone ${inputNumeroTelefone.value} já está vinculado a outro contato!`);
    } else {
        telefone.push(inputNumeroTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}