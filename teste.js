// script.js

// Seleciona o botão
const secretButton = document.getElementById('secretButton');

// Adiciona o evento de clique
secretButton.addEventListener('click', () => {
  // Alterna a classe "other-world" no <body>
  document.body.classList.toggle('other-world');

  // Muda o texto do botão (opcional)
  if (document.body.classList.contains('other-world')) {
    secretButton.textContent = '🌕';
  } else {
    secretButton.textContent = '🧵';
  }
});
