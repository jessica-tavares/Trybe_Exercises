const forms = document.getElementById('formulario');
const submitBtn = document.getElementById('enviar');
const footer = document.getElementById('footer');
const clear = document.getElementById('limpar');

function gerarOptions() {
  const estados = document.getElementById('estados');
  const opcoes = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for (let i = 0; i < opcoes.length; i += 1) {
    const estado = document.createElement('option');
    estado.innerText = opcoes[i];
    estado.value = opcoes[i];
    estados.appendChild(estado);
  }
}

function criadiv(event) {
  const div = document.createElement('div');
  div.className = 'info'
  footer.appendChild(div);
  const infos = document.getElementsByClassName('info')[0];
  const name = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('adress').value;
  const cidade = document.getElementById('cidade').value;  
  const estado = document.getElementById('estados').value;
  const casa = document.getElementById('casa').value;
  const apt = document.getElementById('apartamento').value;
  const resumo = document.getElementById('resume').value;
  const cargo = document.getElementById('cargo').value;
  const descricao = document.getElementById('descricao').value;
  const data = document.getElementById('data').value;
  const info = [name, email, cpf, endereco, cidade, estado, casa, apt, resumo, cargo, descricao, data];

  for (let i = 0; i < info.length; i+= 1) {
    const p = document.createElement('p');
    p.innerHTML = info[i];
    infos.appendChild(p);
  }
  
}

function submit(event) {
  criadiv(event)
  event.preventDefault()
}

function clearAll() {
  const infos = document.getElementsByClassName('info')[0];
  forms.reset()
  while (footer.firstChild) {
    footer.removeChild(footer.firstChild);
  }
}

window.onload = function () {
  gerarOptions()
}

submitBtn.addEventListener('click',function () {
  submit(event)
})

clear.addEventListener('click', clearAll());