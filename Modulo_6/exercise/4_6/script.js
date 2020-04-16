const estados = document.getElementById('estados');

function gerarOptions() {
  const opcoes = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for (let i = 0; i < opcoes.length; i += 1) {
    const estado = document.createElement('option');
    estado.innerText = opcoes[i];
    estado.value = opcoes[i];
    estados.appendChild(estado);
  }
}

function submit() {
  preventDefault()
}

window.onload = function () {
  gerarOptions()
}