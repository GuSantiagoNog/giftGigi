document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita o recarregamento da página

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Exemplo simples (NÃO usar isso em produção!)
  if (user === 'gigi' && pass === '0201') {
    // alert('Login bem-sucedido!');
    window.location.href = 'home.html'; // ou window.open('home.html', '_blank');
  } else {
    document.getElementById('error-msg').textContent = 'Usuário ou senha incorretos!';
  }
});