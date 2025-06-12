const tempoEl = document.getElementById('tempo-namoro');
const inicioNamoro = new Date('2023-01-02T00:00:00');

function atualizarTempo() {
  const agora = new Date();

  let anos = agora.getFullYear() - inicioNamoro.getFullYear();
  let meses = agora.getMonth() - inicioNamoro.getMonth();
  let dias = agora.getDate() - inicioNamoro.getDate();
  let horas = agora.getHours() - inicioNamoro.getHours();
  let minutos = agora.getMinutes() - inicioNamoro.getMinutes();
  let segundos = agora.getSeconds() - inicioNamoro.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    // Ajusta para o número correto de dias do mês anterior
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoMes;
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  tempoEl.innerText = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);
