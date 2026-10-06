function BarraNavegacao() {
  return (
    <header className="barra-navegacao">
      <div className="logo">
        <div className="logo-icone">♧</div>
        <span>Raiz</span>
      </div>

      <nav>
        <a href="/">Início</a>
        <a href="/solucoes">Soluções</a>
        <a href="/projetos">Projetos</a>
        <a href="/impacto">Impacto</a>
      </nav>

      <button className="botao-navegacao">
        Encontrar solução
      </button>

      <button className="menu">
        ☰
      </button>
    </header>
  );
}

export default BarraNavegacao;