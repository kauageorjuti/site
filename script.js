
document.addEventListener('DOMContentLoaded', () => {
  const produtoForm = document.getElementById('produtoForm');
  const saidaForm = document.getElementById('saidaForm');
  const historico = document.getElementById('historico');
  const produtoSelect = document.getElementById('produtoSelect');

  const produtos = [];
  const registros = [];

  produtoForm.addEventListener('submit', e => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const qtd = parseInt(document.getElementById('quantidade').value);
    produtos.push({ nome, qtd });
    const opt = document.createElement('option');
    opt.textContent = nome;
    produtoSelect.appendChild(opt);
    alert('Produto cadastrado!');
    produtoForm.reset();
  });

  saidaForm.addEventListener('submit', e => {
    e.preventDefault();
    const nome = produtoSelect.value;
    const qtdSaida = parseInt(document.getElementById('quantidadeSaida').value);
    const motivo = document.getElementById('motivoSaida').value;
    registros.push({ nome, qtdSaida, motivo, data: new Date().toLocaleString() });
    const li = document.createElement('li');
    li.textContent = `${nome} - ${qtdSaida} unidades | Motivo: ${motivo}`;
    historico.appendChild(li);
    alert('Saída registrada!');
    saidaForm.reset();
  });
});
