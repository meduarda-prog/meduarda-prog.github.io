function mostrarDemo(tipo) {
  const demo = document.getElementById(demo-${tipo});
  if (!demo) return;

  // alterna visibilidade
  demo.style.display = demo.style.display === "block" ? "none" : "block";

  // conteúdo da simulação
  if (tipo === "estoque") {
    demo.innerHTML = `
      <strong>Simulação:</strong><br>
      Produto: Tênis Nike Air Max<br>
      Quantidade atual: 3<br>
      <em>Aviso: estoque baixo!</em>
    `;
  }

  if (tipo === "agenda") {
    demo.innerHTML = `
      <strong>Simulação:</strong><br>
      Paciente: João Silva<br>
      Consulta marcada para 25/10/2025 às 14h.<br>
      Status: Confirmada ✅
    `;
  }
}
