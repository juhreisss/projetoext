import { useState } from 'react';

function BarraNavegacao({ onNavigate }) {
  const [menuAberto, setMenuAberto] = useState(false);

  function navegarPara(evento, caminho) {
    evento.preventDefault();
    onNavigate(caminho);
    setMenuAberto(false);
  }

  const links = [
    { nome: 'Início', caminho: '/' },
    { nome: 'Soluções', caminho: '/solucoes' },
    { nome: 'Nosso projeto', caminho: '/projetos' },
    { nome: 'Impacto', caminho: '/impacto' },
  ];

  return (
    <header className="barra-navegacao">
      <a
        href="/"
        className="logo"
        onClick={(e) => navegarPara(e, '/')}
      >
        <div className="logo-icone">✳</div>
        <span>raiz<span className="logo-ponto">.</span></span>
      </a>

      <nav className={menuAberto ? 'nav-links ativo' : 'nav-links'}>
        {links.map((link) => (
          <a
            key={link.caminho}
            href={link.caminho}
            onClick={(e) => navegarPara(e, link.caminho)}
          >
            {link.nome}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="botao-navegacao"
        onClick={() => {
          onNavigate('/chatbot');
          setMenuAberto(false);
        }}
      >
        <span>✧</span> Encontrar solução
        <span className="seta-botao">↗</span>
      </button>

      <button
        type="button"
        className="menu"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? '✕' : '☰'}
      </button>
    </header>
  );
}

export default BarraNavegacao;