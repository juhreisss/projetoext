
import { useEffect, useState } from 'react';
import './App.css';

import BarraNavegacao from './componentes/BarraNavegacao';
import Inicio from './paginas/Inicio';
import Solucoes from './paginas/Solucoes';
import Projetos from './paginas/Projetos';
import Impacto from './paginas/Impacto';
import Rodape from './componentes/Rodape';
import Chatbot from './paginas/Chatbot';

function App() {
  const [pagina, setPagina] = useState(window.location.pathname);

  useEffect(() => {
    function atualizarPagina() {
      setPagina(window.location.pathname);
    }

    window.addEventListener('popstate', atualizarPagina);

    return () => {
      window.removeEventListener('popstate', atualizarPagina);
    };
  }, []);

  function navegar(caminho) {
    window.history.pushState({}, '', caminho);
    setPagina(caminho);
    window.scrollTo(0, 0);
  }

  function renderizarPagina() {
    switch (pagina) {
      case '/solucoes':
        return <Solucoes />;

      case '/projetos':
        return <Projetos />;

      case '/impacto':
        return <Impacto />;

      case '/chatbot':
        return <Chatbot />;

      default:
        return <Inicio onNavigate={navegar} />;
    }
  }

  return (
    <div className="site">
      <BarraNavegacao onNavigate={navegar} />
      {renderizarPagina()}
      <Rodape />
    </div>
  );
}

export default App;
