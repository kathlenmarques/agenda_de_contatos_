const form = document.getElementById('formulario');
let linhas = '';
  form.addEventListener('submit', function (e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nomeContato');
    const inputTelefoneContato = document.getElementById('telefoneContato');
    
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

  })