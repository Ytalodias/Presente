// Definindo a data de início
const startDate = new Date('2023-11-08T00:00:00');

// Função que atualiza o contador a cada segundo
function updateCounter() {
    const now = new Date();
    const timeDiff = now - startDate;

    // Calcula os dias, horas, minutos e segundos
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Exibe os valores no HTML (ajuste os IDs conforme o HTML)
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Chama a função imediatamente para atualizar os números na primeira renderização
updateCounter();

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);


// script.js

// script.js

// Seleciona o botão e a div tempo
const secretButton = document.getElementById('secretButton');
const tempoDiv = document.querySelector('.tempo');

// Adiciona o evento de clique no botão
secretButton.addEventListener('click', () => {
  // Alterna a classe "other-world" no <body>
  document.body.classList.toggle('other-world');

  // Alterna a classe "other-world" na div tempo
  tempoDiv.classList.toggle('other-world');

  // Muda o texto do botão (opcional)
  if (document.body.classList.contains('other-world')) {
    secretButton.textContent = '🌕';
  } else {
    secretButton.textContent = '🧵';
  }
});
